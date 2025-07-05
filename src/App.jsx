import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}

export default App;
