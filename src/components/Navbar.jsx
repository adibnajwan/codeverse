import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiInstagram } from "react-icons/fi";
import logoRuangProject from '../assets/logo-ruang-project.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold text-[#C58F61] cursor-pointer"
          onClick={closeMenu}
        >
          <img src={logoRuangProject} alt="logo" className="h-10 w-auto" />

        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FiX size={28} className="text-gray-800" />
          ) : (
            <FiMenu size={28} className="text-gray-800" />
          )}
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 md:static absolute left-0 right-0 bg-white md:bg-transparent md:shadow-none shadow-lg md:py-0 py-4 transition-all duration-300 ease-in ${
            isOpen
              ? "top-16 opacity-100"
              : "top-[-300px] opacity-0 md:opacity-100"
          }`}
        >
          {[
            { id: "hero", name: "Beranda" },
            { id: "about", name: "Tentang" },
            { id: "pricing", name: "Paket" },
            { id: "testimonials", name: "Testimoni" },
          ].map((section, idx) => (
            <li key={idx} className="md:my-0 my-4 text-center">
              <Link
                to={section.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="text-gray-800 hover:text-[#C58F61] font-medium cursor-pointer transition-colors"
                onClick={closeMenu}
              >
                {section.name}
              </Link>
            </li>
          ))}
          {/* Vertical Divider */}
          <li className="hidden md:flex items-center mx-2">
            <span className="text-gray-400">|</span>
          </li>
          {/* Instagram Icon */}
          <li className="md:my-0 my-4 text-center">
            <a
              href="https://www.instagram.com/ruang_project.eo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#C58F61] font-medium flex items-center justify-center space-x-2"
            >
              <FiInstagram size={20} />
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
