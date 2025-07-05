export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-md z-50 flex justify-between items-center px-4 lg:px-44 py-4">
      <div >
        <span className="font-bold text-xl text-blue-600">Jatin Ukey</span>
      </div>
      <ul className="hidden lg:flex lg:gap-7 lg:text-gray-700">
        <li><a href="#hero" className="text-primary font-semibold">Home</a></li>
        <li><a href="#about" className="hover:text-primary">About</a></li>
        <li><a href="#skills" className="hover:text-primary">Skills</a></li>
        <li><a href="#projects" className="hover:text-primary">Projects</a></li>
        <li><a href="#experience" className="hover:text-primary">Experience</a></li>
        <li><a href="#contact" className="hover:text-primary">Contact</a></li>
      </ul>
    </nav>
  );
}
