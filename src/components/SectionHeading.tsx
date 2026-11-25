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
      className="mb-7 flex flex-wrap items-end justify-between gap-4"
    >
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-lime">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
