import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  return (
    <a
      href="#home"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed right-4 bottom-4 z-30 flex size-11 items-center justify-center rounded-full border border-white/15 bg-panel/95 text-lime shadow-lg backdrop-blur-lg transition duration-300 hover:border-lime hover:bg-lime hover:text-background motion-reduce:transition-none sm:right-6 sm:bottom-6 ${visible ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"}`}
    >
      <ChevronUp size={20} aria-hidden="true" />
    </a>
  );
}
