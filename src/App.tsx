import "./App.css";
import { Header } from "./components/Header";
import {
  Hero,
  Projects,
  Skills,
  Experience,
  About,
  Achievements,
  Contact,
  Footer,
} from "./components/PortfolioSections";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-zinc-100 selection:bg-lime selection:text-black [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-lime [&_button]:focus-visible:outline-2 [&_button]:focus-visible:outline-offset-4 [&_button]:focus-visible:outline-lime">
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
    </div>
  );
}
