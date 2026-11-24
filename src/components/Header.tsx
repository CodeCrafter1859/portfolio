import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "../constants/profile";
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
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
    <header className="relative z-20 border-b border-white/5 bg-background">
      <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          aria-label="Ashutosh Sinha home"
          className="text-2xl font-bold tracking-tight"
        >
          AS<span className="text-lime">.</span>
        </a>
        <button
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
            if (event.key === "Escape") setOpen(false);
          }}
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col border-b border-white/10 bg-background p-5 md:static md:flex md:flex-row md:gap-7 md:border-0 md:p-0`}
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              aria-current={
                active === item.toLowerCase() ? "location" : undefined
              }
              className={`py-3 text-xs font-medium uppercase tracking-wider transition-colors hover:text-lime ${active === item.toLowerCase() ? "text-lime" : "text-zinc-300"}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
