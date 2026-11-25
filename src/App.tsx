import "./App.css";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { Header } from "./components/Header";
import { BackToTop } from "./components/BackToTop";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { About } from "./components/sections/About";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

export default function App() {
  const revealRoot = useScrollReveal();
  return (
    <div
      ref={revealRoot}
      className="min-h-screen bg-background font-sans text-zinc-100 selection:bg-lime selection:text-black [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-lime [&_button]:focus-visible:outline-2 [&_button]:focus-visible:outline-offset-4 [&_button]:focus-visible:outline-lime motion-reduce:[&_a]:transition-none motion-reduce:[&_button]:transition-none"
    >
      <a
        href="#main"
        className="absolute -top-20 left-4 z-50 rounded bg-lime p-3 text-black focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Projects />
          <Skills />
          <Experience />
          <About />
          <Achievements />
          <Contact />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
