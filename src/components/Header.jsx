import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="p-4 bg-[#0A101E]/90 backdrop-blur-md shadow-md fixed w-full z-50"
      data-aos="fade-up"
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 w-full max-w-7xl">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">Naveen</h1>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-6">
          <a href="#about" className="hover:underline text-white">
            About
          </a>
          <a href="#skills" className="hover:underline text-white">
            Skills
          </a>
          <a href="#projects" className="hover:underline text-white">
            Projects
          </a>
          <a href="#contact" className="hover:underline text-white">
            Contact
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-2 text-white text-sm">
            <Phone size={18} />
            <span className="text-yellow-400 font-bold">+91 90959 41447</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`sm:hidden fixed top-16 left-0 w-full bg-[#0A101E] text-white p-6 shadow-lg transition-all duration-300 z-40 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          {["about", "skills", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <div className="flex items-center gap-2 mt-4">
            <Phone size={18} className="text-white" />
            <span className="text-yellow-400 font-bold">
              +91 98765 43210
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}