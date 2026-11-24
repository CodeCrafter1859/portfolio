import { Blocks, BrainCircuit, Database, Layers3, Plus, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "../constants/profile";
const themes = {
  orange: "from-orange-950/80 to-background border-orange-900/30",
  teal: "from-teal-950 to-background border-teal-800/30",
  purple: "from-purple-950 to-background border-purple-900/40",
  blue: "from-blue-950 to-background border-blue-900/30",
};
const colors = {
  orange: "text-orange-400",
  teal: "text-teal-400",
  purple: "text-purple-400",
  blue: "text-blue-400",
};
const icons = {
  orange: Blocks,
  teal: Database,
  purple: BrainCircuit,
  blue: Layers3,
};
export function ProjectCard({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const Icon = icons[project.theme];
  useEffect(() => {
    const element = dialog.current;
    const unlock = () => {
      document.body.classList.remove("overflow-hidden");
    };
    element?.addEventListener("close", unlock);
    return () => {
      element?.removeEventListener("close", unlock);
      unlock();
    };
  }, []);
  return (
    <>
      <article
        className={`flex h-full flex-col rounded-lg border bg-linear-to-br p-6 transition-transform duration-200 motion-safe:hover:-translate-y-1 ${themes[project.theme]}`}
      >
        <Icon
          aria-hidden="true"
          size={44}
          strokeWidth={1.7}
          className={`mb-5 ${colors[project.theme]}`}
        />
        <h3 className="mb-3 text-xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-300">
          {project.description}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-white/10 px-2 py-1 text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <button
          className="flex min-h-11 w-fit items-center gap-3 rounded border border-white/15 px-4 text-xs font-medium uppercase tracking-wide transition-colors hover:border-lime hover:text-lime"
          onClick={() => {
            dialog.current?.showModal();
            document.body.classList.add("overflow-hidden");
          }}
        >
          View project <Plus size={15} aria-hidden="true" />
        </button>
      </article>
      <dialog
        ref={dialog}
        aria-labelledby={`project-${project.theme}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-xl border border-white/15 bg-panel p-6 text-white shadow-2xl backdrop:bg-black/80 sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <Icon
            size={36}
            aria-hidden="true"
            className={colors[project.theme]}
          />
          <button
            aria-label="Close project details"
            onClick={() => dialog.current?.close()}
            className="rounded p-2 hover:bg-white/10"
          >
            <X size={22} />
          </button>
        </div>
        <h3
          id={`project-${project.theme}`}
          className="mb-4 text-2xl font-semibold"
        >
          {project.name}
        </h3>
        <p className="mb-5 text-sm text-lime">{project.stack.join(" · ")}</p>
        <ul className="space-y-4 pl-5 text-base leading-relaxed text-zinc-300">
          {project.details.map((detail) => (
            <li key={detail} className="list-disc marker:text-lime">
              {detail}
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}
