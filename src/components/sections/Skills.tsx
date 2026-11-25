import { Code2, BrainCircuit, Server, Cloud } from "lucide-react";
import { skillGroups } from "../../constants/profile";
import { SectionHeading } from "../SectionHeading";
import { section } from "./styles";

const capabilities = [
  {
    icon: Code2,
    title: "Full Stack Development",
    text: "Scalable web applications, from API to interface.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    text: "LLM-powered features and intelligent applications.",
  },
  {
    icon: Server,
    title: "API Design",
    text: "RESTful services with secure authentication.",
  },
  {
    icon: Cloud,
    title: "Cloud & Delivery",
    text: "AWS infrastructure and efficient media delivery.",
  },
];

export function Skills() {
  return (
    <section id="skills" className={section}>
      <SectionHeading eyebrow="Tech stack" title="Technical Skills" />
      <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-panel lg:grid-cols-[1fr_16rem]">
        <div data-reveal-group className="divide-y divide-white/5">
          {skillGroups.map((group) => (
            <div
              data-reveal="left"
              key={group.label}
              className="grid gap-3 px-5 py-5 transition-colors duration-300 hover:bg-white/3 sm:grid-cols-[7rem_1fr]"
            >
              <h3 className="text-sm font-medium text-zinc-300">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-sm text-zinc-300 transition-colors duration-300 hover:border-lime/30 hover:bg-lime/5 hover:text-lime"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          data-reveal-group
          className="grid gap-6 border-t border-white/5 p-6 sm:grid-cols-2 lg:grid-cols-1 lg:border-t-0 lg:border-l"
        >
          {capabilities.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex gap-3 rounded-xl p-2 transition-colors duration-300 hover:bg-white/5"
            >
              <Icon
                size={22}
                className="shrink-0 text-lime transition-transform duration-300 motion-safe:group-hover:scale-110"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
