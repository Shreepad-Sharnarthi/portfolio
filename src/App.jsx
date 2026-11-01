import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Research from "./sections/Research";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Research />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
