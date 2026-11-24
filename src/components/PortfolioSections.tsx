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
  "inline-flex min-h-11 items-center justify-center gap-3 rounded border px-5 py-3 text-xs font-semibold uppercase tracking-wide transition-colors";
const currentYear = new Date().getFullYear();
const section = "scroll-mt-6 border-t border-white/7 py-10 sm:py-12";
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
      className="relative mx-auto grid max-w-6xl scroll-mt-6 items-center overflow-hidden px-5 pt-12 sm:px-8 md:min-h-145 md:grid-cols-2 md:pt-0"
    >
      <div className="relative z-10 pb-10 md:py-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-lime sm:text-sm">
          Full Stack Engineer
        </p>
        <h1 className="text-5xl leading-[0.98] font-bold tracking-tight sm:text-6xl lg:text-7xl">
          ASHUTOSH
          <br />
          SINHA
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
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
      <div className="grid overflow-hidden rounded-lg border border-white/5 bg-panel lg:grid-cols-[1fr_16rem]">
        <div className="divide-y divide-white/5">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 px-5 py-4 sm:grid-cols-[7rem_1fr]"
            >
              <h3 className="text-sm font-medium text-zinc-300">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-zinc-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 border-t border-white/5 p-6 sm:grid-cols-2 lg:grid-cols-1 lg:border-t-0 lg:border-l">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-3">
              <Icon
                size={22}
                className="shrink-0 text-lime"
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
      <div className="space-y-8">
        {experience.map((job) => (
          <article
            key={job.company}
            className="grid gap-5 md:grid-cols-[13rem_1fr]"
          >
            <div className="h-fit rounded bg-panel p-4">
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
              <ul className="space-y-2 pl-4 text-sm leading-relaxed text-zinc-400">
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
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <p className="text-base leading-relaxed text-zinc-400">
          {profile.summary}
        </p>
        <div className="flex gap-4 rounded-lg border border-white/5 bg-panel p-5">
          <GraduationCap className="shrink-0 text-lime" aria-hidden="true" />
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
      <div className="mb-7">
        <p className="mb-2 text-xs uppercase tracking-widest text-lime">
          Achievement
        </p>
        <h2
          id="achievement-title"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Problem Solver
        </h2>
      </div>
      <div className="grid items-center gap-8 sm:grid-cols-3">
        <a
          href={profile.leetcode}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg border border-white/5 bg-panel px-5 py-8 text-2xl hover:border-lime/40"
        >
          <Code2 size={40} className="text-amber-400" aria-hidden="true" />
          LeetCode
        </a>
        <div className="text-center">
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
      className="mb-10 scroll-mt-6 rounded-lg border border-white/10 bg-linear-to-r from-panel via-purple-950/50 to-lime/50 p-6 sm:p-9"
    >
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-lime">
            Let's work together
          </p>
          <h2 className="max-w-md text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
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
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto grid max-w-6xl gap-8 px-5 pb-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
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
