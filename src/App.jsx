import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./index.css";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        {/* <About /> */}
        {/* You can add more sections here as needed */}
      </main>
    </div>
  );
}

export default App;
