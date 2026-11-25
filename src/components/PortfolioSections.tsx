import { useState } from "react";
import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Server,
  Trophy,
} from "lucide-react";

import portrait from "../assets/my_pic.jpeg";
import resume from "../assets/CV_Ashutosh_Sinha.pdf";

import { CopyEmail } from "./CopyEmail";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import {
  experience,
  navigation,
  profile,
  projects,
  skillGroups,
} from "../constants/profile";

const button =
  "inline-flex min-h-11 items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wide transition duration-200 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95 motion-reduce:transition-none";
const currentYear = new Date().getFullYear();
const section = "scroll-mt-28 border-t border-white/7 py-14 sm:py-20";
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

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-6xl scroll-mt-28 items-center overflow-hidden px-5 pt-12 sm:px-8 md:min-h-160 md:grid-cols-2 md:pt-0"
    >
      <div data-reveal-group className="relative z-10 pb-10 md:py-16">
        <p className="mb-6 w-fit rounded-full border border-lime/20 bg-lime/5 px-4 py-2 font-mono text-xs font-medium uppercase tracking-widest text-lime sm:text-sm">
          Full Stack Engineer
        </p>
        <h1 className="text-5xl leading-[1.02] font-bold tracking-tighter sm:text-6xl lg:text-8xl">
          ASHUTOSH
          <br />
          <span className="text-lime">SINHA</span>
        </h1>
        <p className="mt-7 max-w-md text-base leading-relaxed sm:text-lg text-zinc-400">
          I build scalable web applications and AI-powered solutions. Bringing
          together Python, React, and cloud technologies to solve real-world
          problems.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs">
          <span className="flex items-center gap-2 text-lime">
            <BriefcaseBusiness size={16} aria-hidden="true" />
            2+ YEARS OF EXPERIENCE
          </span>
          <span className="flex items-center gap-2 text-purple-400">
            <MapPin size={16} aria-hidden="true" />
            PUNE, INDIA
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className={`${button} border-lime bg-lime text-background hover:bg-lime-300`}
          >
            View on GitHub <Code2 size={17} aria-hidden="true" />
          </a>
          <a
            href={resume}
            download="CV_Ashutosh_Sinha.pdf"
            className={`${button} border-white/25 hover:border-lime hover:text-lime`}
          >
            Download resume <Download size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-md self-end justify-center pt-4 md:pt-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-radial from-lime/25 via-purple-600/15 to-transparent blur-3xl"
        />
        <img
          data-reveal="scale"
          src={portrait}
          alt="Ashutosh Sinha wearing a charcoal suit and blue shirt"
          width="384"
          height="432"
          fetchPriority="high"
          className="relative h-auto w-full rounded-t-[6rem] object-cover [mask-image:linear-gradient(to_bottom,black_75%,transparent)] md:rounded-t-[9rem]"
        />
      </div>
    </section>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="projects" className={section}>
      <SectionHeading eyebrow="Featured work" title="Worked On">
        <button
          onClick={() => setShowAll(!showAll)}
          aria-expanded={showAll}
          aria-controls="project-grid"
          className="min-h-11 text-xs font-medium uppercase tracking-wide text-zinc-300 hover:text-lime"
        >
          {showAll ? "Show featured projects" : "View all projects"}{" "}
          <span className="ml-2 text-lime">{showAll ? "−" : "+"}</span>
        </button>
      </SectionHeading>
      <div
        data-reveal-group
        id="project-grid"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.slice(0, showAll ? projects.length : 3).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

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
            <h3 className="text-base font-semibold">Bachelor of Engineering</h3>
            <p className="mt-1 text-sm text-zinc-300">Information Technology</p>
            <p className="mt-3 text-sm text-zinc-400">
              Savitribai Phule Pune University
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              August 2019 – July 2023 · Ambi, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section className={section} aria-labelledby="achievement-title">
      <div data-reveal="fade" className="mb-7">
        <p className="mb-2 text-xs uppercase tracking-widest text-lime">
          Achievement
        </p>
        <h2
          id="achievement-title"
          className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Problem Solver
        </h2>
      </div>
      <div data-reveal-group className="grid items-center gap-8 sm:grid-cols-3">
        <a
          href={profile.leetcode}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg border border-white/5 bg-panel px-5 py-8 text-2xl hover:border-lime/40"
        >
          <Code2 size={40} className="text-amber-400" aria-hidden="true" />
          LeetCode
        </a>
        <div data-reveal="scale" className="text-center">
          <p className="text-6xl font-bold tracking-tight text-lime">600+</p>
          <p className="mt-2 text-base font-medium">Problems Solved</p>
          <p className="mt-1 text-sm text-zinc-400">
            Data Structures & Algorithms
          </p>
        </div>
        <div>
          <dl className="space-y-4 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-400">Global ranking</dt>
              <dd className="font-semibold">128K</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-400">Contest rating</dt>
              <dd className="font-semibold">1,584</dd>
            </div>
          </dl>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            className={`${button} mt-5 w-full border-white/15 hover:border-lime hover:text-lime`}
          >
            View LeetCode profile <Trophy size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="mb-14 scroll-mt-28 rounded-3xl border border-white/10 bg-linear-to-r from-panel via-purple-950/50 to-lime/30 p-6 sm:p-10 lg:p-12"
    >
      <div data-reveal-group className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-lime">
            Let's work together
          </p>
          <h2 className="max-w-md text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to build something amazing?
          </h2>
        </div>
        <div className="md:pl-6">
          <p className="mb-5 text-base leading-relaxed text-zinc-200">
            Have a project in mind? Let's talk about building thoughtful,
            scalable software.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className={`${button} border-lime bg-lime text-background hover:bg-lime-300`}
          >
            Get in touch <Mail size={16} aria-hidden="true" />
          </a>
          <CopyEmail />
        </div>
      </div>
    </section>
  );
}

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
        <p className="mt-2 text-sm text-zinc-500">
          Clean architecture. Thoughtful software.
        </p>
        <p className="mt-6 text-xs text-zinc-500">
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
            href="tel:+917517371859"
            className="flex items-center gap-2 hover:text-lime"
          >
            <Phone size={15} aria-hidden="true" />
            {profile.phone}
          </a>
          <p className="flex items-center gap-2">
            <MapPin size={15} aria-hidden="true" />
            Pune, 411035 · India
          </p>
        </div>
      </div>
    </footer>
  );
}
