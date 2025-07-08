import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 flex justify-between items-center px-4 lg:px-44 py-4">
        <span className="font-bold text-xl text-blue-600">Jatin Ukey</span>

        {/* ✅ Desktop Nav */}
        <ul className="hidden lg:flex lg:gap-7 lg:text-gray-700">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white py-6 shadow-md flex flex-col items-center gap-6 lg:hidden z-40">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
