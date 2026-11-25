import { useLayoutEffect, useRef } from "react";

const selector = "[data-reveal], [data-reveal-group] > :not(dialog)";
const baseClasses = [
  "motion-safe:transition-[opacity,translate,scale]",
  "motion-safe:duration-700",
  "motion-safe:ease-out",
  "motion-reduce:transition-none",
  "motion-reduce:opacity-100",
  "motion-reduce:translate-x-0",
  "motion-reduce:translate-y-0",
  "motion-reduce:scale-100",
];
const delays = [
  "delay-0",
  "motion-safe:delay-75",
  "motion-safe:delay-150",
  "motion-safe:delay-200",
];
const hiddenClasses = [
  "motion-safe:opacity-0",
  "motion-safe:translate-y-5",
  "motion-safe:-translate-x-3",
  "motion-safe:scale-95",
];

/** One observer, one entrance per element, and no scroll-event work. */
export function useScrollReveal() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = root.current;
    if (!container || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const registered = new Set<HTMLElement>();
    const reveal = (element: HTMLElement, immediate = false) => {
      if (immediate) element.classList.remove(...baseClasses, ...delays);
      element.classList.remove(...hiddenClasses);
      element.dataset.revealed = "true";
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        }
      },
      { threshold: 0.08 },
    );

    const register = (element: HTMLElement) => {
      if (registered.has(element)) return;
      registered.add(element);
      // Keep content visible with reduced motion, during printing, or without JS.
      if (preference.matches) {
        reveal(element, true);
        return;
      }
      const siblings = element.parentElement?.querySelectorAll(
        ":scope > :not(dialog)",
      );
      const index = siblings ? Array.from(siblings).indexOf(element) : 0;
      const variant = element.dataset.reveal;
      element.classList.add(
        ...baseClasses,
        delays[index % delays.length],
        "motion-safe:opacity-0",
        "print:opacity-100",
        "print:translate-none",
        "print:scale-100",
      );
      if (variant === "left")
        element.classList.add("motion-safe:-translate-x-3");
      else if (variant === "scale")
        element.classList.add("motion-safe:scale-95");
      else if (variant !== "fade")
        element.classList.add("motion-safe:translate-y-5");
      element.dataset.revealed = "false";
      observer.observe(element);
    };
    const visit = (node: Node, callback: (element: HTMLElement) => void) => {
      if (!(node instanceof HTMLElement)) return;
      if (node.matches(selector)) callback(node);
      node.querySelectorAll<HTMLElement>(selector).forEach(callback);
    };
    const onPreferenceChange = () => {
      if (preference.matches)
        registered.forEach((element) => reveal(element, true));
    };
    // Keyboard navigation must never land on a visually hidden control.
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      let element: Element | null = event.target;
      while (element && container.contains(element)) {
        if (element instanceof HTMLElement && registered.has(element))
          reveal(element, true);
        element = element.parentElement;
      }
    };
    // Entrance delays must not slow down later hover and button feedback.
    const onTransitionEnd = (event: TransitionEvent) => {
      if (
        event.propertyName !== "opacity" ||
        !(event.target instanceof HTMLElement)
      )
        return;
      if (
        registered.has(event.target) &&
        event.target.dataset.revealed === "true"
      ) {
        event.target.classList.remove(...baseClasses, ...delays);
      }
    };
    container.querySelectorAll<HTMLElement>(selector).forEach(register);
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.removedNodes) {
          if (!(node instanceof HTMLElement) || container.contains(node))
            continue;
          // Detached group children no longer match the parent selector.
          for (const element of registered) {
            if (node === element || node.contains(element)) {
              observer.unobserve(element);
              registered.delete(element);
              element.classList.remove(
                ...baseClasses,
                ...delays,
                ...hiddenClasses,
              );
              delete element.dataset.revealed;
            }
          }
        }
        for (const node of record.addedNodes) {
          if (container.contains(node)) visit(node, register);
        }
      }
    });
    mutations.observe(container, { childList: true, subtree: true });
    preference.addEventListener("change", onPreferenceChange);
    container.addEventListener("focusin", onFocus);
    container.addEventListener("transitionend", onTransitionEnd);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
      container.removeEventListener("focusin", onFocus);
      container.removeEventListener("transitionend", onTransitionEnd);
      registered.forEach((element) => {
        element.classList.remove(...baseClasses, ...delays, ...hiddenClasses);
        delete element.dataset.revealed;
      });
    };
  }, []);
  return root;
}
