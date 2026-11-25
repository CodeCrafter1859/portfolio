import { Mail, Phone, MapPin } from "lucide-react";
import { profile, navigation } from "../../constants/profile";
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      data-reveal-group
      className="mx-auto grid max-w-6xl gap-8 px-5 pb-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]"
    >
      <div>
        <a href="#home" className="text-3xl font-bold">
          Ashutosh Sinha
        </a>
        <p className="mt-3 text-sm text-zinc-400">Full Stack Engineer</p>
        <p className="mt-2 text-sm text-[#797983]">
          Clean architecture. Thoughtful software.
        </p>
        <p className="mt-6 text-xs text-[#797983]">
          © {currentYear} Ashutosh Sinha.
        </p>
      </div>
      <div>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest">
          Navigation
        </h2>
        <ul className="space-y-2 text-sm text-zinc-400">
          {navigation.map((item) => (
            <li key={item}>
              <a
                className="inline-block py-1 hover:text-lime"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest">
          Social
        </h2>
        <ul className="space-y-2 text-sm text-zinc-400">
          {[
            ["GitHub", profile.github],
            ["LinkedIn", profile.linkedin],
            ["LeetCode", profile.leetcode],
          ].map(([label, url]) => (
            <li key={label}>
              <a
                className="inline-block py-1 hover:text-lime"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest">
          Contact
        </h2>
        <div className="space-y-4 text-sm text-zinc-400">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 break-all hover:text-lime"
          >
            <Mail size={15} className="shrink-0" aria-hidden="true" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replaceAll(" ", "")}`}
            className="flex items-center gap-2 hover:text-lime"
          >
            <Phone size={15} aria-hidden="true" />
            {profile.phone}
          </a>
          <p className="flex items-center gap-2">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
