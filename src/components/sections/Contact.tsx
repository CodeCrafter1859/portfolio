import { Mail } from "lucide-react";
import { profile } from "../../constants/profile";
import { CopyEmail } from "../CopyEmail";
import { button } from "./styles";

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
