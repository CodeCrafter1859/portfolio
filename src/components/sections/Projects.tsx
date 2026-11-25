import { useState } from "react";
import { projects } from "../../constants/profile";
import { ProjectCard } from "../ProjectCard";
import { SectionHeading } from "../SectionHeading";
import { section } from "./styles";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="projects" className={section}>
      <SectionHeading eyebrow="Featured work" title="Worked On">
        <button
          onClick={() => setShowAll((previous) => !previous)}
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
