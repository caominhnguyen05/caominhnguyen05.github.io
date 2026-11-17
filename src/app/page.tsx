import "./page.css";
import Navbar from "./components/nav-bar/nav-bar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Education from "./components/education/education";
import RevealObserver from "./components/reveal-observer/reveal-observer";

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <RevealObserver />
      <main id="main-content" tabIndex={-1}>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
