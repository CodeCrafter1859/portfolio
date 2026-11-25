import { BriefcaseBusiness, MapPin, Code2, Download } from "lucide-react";
import portrait from "../../assets/my_pic.jpeg";
import resume from "../../assets/CV_Ashutosh_Sinha.pdf";
import { profile } from "../../constants/profile";
import { button } from "./styles";

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
