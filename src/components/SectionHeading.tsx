import type { ReactNode } from "react";
interface Props {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}
export function SectionHeading({ eyebrow, title, children }: Props) {
  return (
    <div
      data-reveal-group
      className="mb-9 flex flex-wrap items-end justify-between gap-4"
    >
      <div>
        <p className="mb-3 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-widest before:h-px before:w-7 before:bg-lime/70 text-lime">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
