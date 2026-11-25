import { GraduationCap } from "lucide-react";
import { profile } from "../../constants/profile";
import { SectionHeading } from "../SectionHeading";
import { section } from "./styles";

export function About() {
  return (
    <section id="about" className={section}>
      <SectionHeading eyebrow="The person behind the code" title="About Me" />
      <div data-reveal-group className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <p className="text-base leading-relaxed text-zinc-400">
          {profile.summary}
        </p>
        <div className="group flex gap-4 rounded-2xl border border-white/10 bg-panel p-6 transition-colors duration-300 hover:border-lime/30">
          <GraduationCap
            className="shrink-0 text-lime transition-transform duration-300 motion-safe:group-hover:scale-110"
            aria-hidden="true"
          />
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-zinc-400">
              Education
            </p>
            <h3 className="text-base font-semibold">
              {profile.education.degree}
            </h3>
            <p className="mt-1 text-sm text-zinc-300">
              {profile.education.subject}
            </p>
            <p className="mt-3 text-sm text-zinc-400">
              {profile.education.university}
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              {profile.education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
