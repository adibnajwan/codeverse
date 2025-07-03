import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import bannerImage from "../assets/codeverse_logo_footer.png";

const Footer = () => {
  const { t } = useTranslation();

  const navItems = [
    { id: "hero", name: t("footer.nav.hero") },
    { id: "about", name: t("footer.nav.about") },
    { id: "pricing", name: t("footer.nav.pricing") },
    { id: "testimonials", name: t("footer.nav.testimonials") }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#004D4D] text-white py-8 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col items-center space-y-2 mt-2">
          <Link to="hero" smooth duration={500} className="flex items-center space-x-3 m-0">
            <img
              src={bannerImage}
              className="w-[400px] h-[100px] object-contain"
              alt="Logo Codeverse"
            />
          </Link>
        </div>

        <div className="flex space-x-8 mt-4">
          <ul className="space-y-2 md:space-y-0 md:flex md:space-x-8">
            {navItems.map((section, idx) => (
              <li key={idx}>
                <Link
                  to={section.id}
                  smooth
                  duration={500}
                  spy
                  offset={-70}
                  className="text-gray-400 hover:text-white font-medium cursor-pointer transition-colors"
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-6 mt-10 justify-center">
          <a href="https://www.instagram.com/codeversestore/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FiInstagram className="text-2xl" />
          </a>
          <a href="https://x.com/CodeverseStore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FiTwitter className="text-2xl" />
          </a>
          <a href="https://www.youtube.com/@codeverse_store" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FiYoutube className="text-2xl" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
