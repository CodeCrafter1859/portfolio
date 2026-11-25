import { Code2, Trophy } from "lucide-react";
import { profile } from "../../constants/profile";
import { button, section } from "./styles";

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
          <p className="text-6xl font-bold tracking-tight text-lime">
            {profile.achievements.solved}
          </p>
          <p className="mt-2 text-base font-medium">Problems Solved</p>
          <p className="mt-1 text-sm text-zinc-400">
            Data Structures & Algorithms
          </p>
        </div>
        <div>
          <dl className="space-y-4 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-400">Global ranking</dt>
              <dd className="font-semibold">{profile.achievements.ranking}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-400">Contest rating</dt>
              <dd className="font-semibold">{profile.achievements.rating}</dd>
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
