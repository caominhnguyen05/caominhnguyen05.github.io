import Navbar from "./components/nav-bar/nav-bar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Education from "./components/education/education";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Intro />
        <Projects />
        <About />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
