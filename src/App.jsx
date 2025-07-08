import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationAndCertifications from "./components/EducationAndCertifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <EducationAndCertifications setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
