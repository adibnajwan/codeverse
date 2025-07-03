import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import logoCodeverse from "../assets/codeverse-logo-navbar.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
    closeMenu();
  };

  const navLinks = [
    { id: "hero", label: t("navbar.nav.hero") },
    { id: "about", label: t("navbar.nav.about") },
    { id: "pricing", label: t("navbar.nav.pricing") },
    { id: "testimonials", label: t("navbar.nav.testimonials") }
  ];

  const getLangLabel = () =>
    i18n.language === "id" ? "Indonesia" : "English";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-2 md:py-3"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className="cursor-pointer"
          onClick={closeMenu}
        >
          <img
            src={logoCodeverse}
            alt="Logo Codeverse"
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FiX size={28} className="text-gray-800" />
          ) : (
            <FiMenu size={28} className="text-gray-800" />
          )}
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 md:items-center md:static absolute left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none md:py-0 py-4 transition-all duration-300 ease-in ${
            isOpen ? "top-16 opacity-100" : "top-[-300px] opacity-0 md:opacity-100"
          }`}
        >
          {navLinks.map((section, idx) => (
            <li key={idx} className="md:my-0 my-4 text-center">
              <Link
                to={section.id}
                smooth
                duration={500}
                spy
                offset={-70}
                className="text-gray-800 hover:text-[#42A3A7] font-medium cursor-pointer transition-colors"
                onClick={closeMenu}
              >
                {section.label}
              </Link>
            </li>
          ))}

          {/* Toggle Language Button */}
          <li className="text-center mt-2 md:mt-0">
            <div className="flex justify-center md:justify-end px-4">
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 rounded-md text-sm font-medium transition-all duration-300 bg-white border border-gray-300 text-gray-800 hover:bg-[#42A3A7] hover:text-white hover:shadow-md"
              >
                {getLangLabel()}
              </motion.button>
            </div>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
