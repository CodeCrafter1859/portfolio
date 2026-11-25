import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../constants/profile";
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-10% 0px -65% 0px" },
    );
    navigation.forEach((item) => {
      const element = document.getElementById(item.toLowerCase());
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-40 px-3 py-3 sm:px-6">
      <div className="relative mx-auto flex min-h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-background/85 px-4 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-6">
        <a
          href="#home"
          aria-label="My Portfolio home"
          className="text-lg font-bold tracking-tight transition-colors hover:text-lime sm:text-xl"
        >
          My Portfolio
        </a>
        <button
          ref={menuButton}
          className="rounded-md p-3 hover:bg-white/10 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              menuButton.current?.focus();
            }
          }}
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full mt-2 flex-col rounded-2xl border border-white/10 bg-background p-4 shadow-xl md:static md:mt-0 md:flex md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:gap-2`}
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              aria-current={
                active === item.toLowerCase() ? "location" : undefined
              }
              className={`relative rounded-full px-3 py-3 text-xs font-medium uppercase tracking-wider transition-colors duration-300 hover:bg-white/5 hover:text-lime ${active === item.toLowerCase() ? "bg-lime/10 text-lime" : "text-zinc-300"}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
