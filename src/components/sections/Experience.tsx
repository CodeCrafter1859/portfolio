import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import resume from "../../assets/CV_Ashutosh_Sinha.pdf";
import { experience } from "../../constants/profile";
import { SectionHeading } from "../SectionHeading";
import { section } from "./styles";

export function Experience() {
  return (
    <section id="experience" className={section}>
      <SectionHeading eyebrow="Experience" title="Work Experience">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-11 items-center gap-2 text-xs font-medium uppercase hover:text-lime"
        >
          View full resume <ExternalLink size={14} />
        </a>
      </SectionHeading>
      <div data-reveal-group className="space-y-8">
        {experience.map((job) => (
          <article
            key={job.company}
            className="group grid gap-5 rounded-2xl border border-transparent p-3 transition-colors duration-300 hover:border-white/10 hover:bg-panel/50 sm:p-5 md:grid-cols-[13rem_1fr]"
          >
            <div className="h-fit rounded-xl border border-white/5 bg-panel p-5">
              <BriefcaseBusiness
                size={22}
                aria-hidden="true"
                className="mb-3 text-zinc-400"
              />
              <h3 className="text-sm font-semibold">{job.company}</h3>
              <p className="mt-2 text-xs text-zinc-400">{job.location}</p>
            </div>
            <div className="relative border-l border-white/10 pl-6 before:absolute before:top-2 before:-left-1 before:size-2 before:rounded-full before:bg-lime">
              <div className="mb-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                <h4 className="text-base font-semibold text-lime">
                  {job.role}
                </h4>
                <p className="text-xs text-zinc-400">{job.date}</p>
              </div>
              <ul className="space-y-2 pl-4 text-base leading-relaxed text-zinc-400">
                {job.points.map((point) => (
                  <li className="list-disc" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
