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
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationAndCertifications />
        <Contact />
        <Footer />
        {/* You can add more sections here as needed */}
      </main>
    </div>
  );
}

export default App;
