import { motion } from "framer-motion";
import bannerImage from "../assets/hero-background.png";
import "@fontsource/playfair-display";
import "@fontsource/poppins";

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen bg-gradient-to-b from-blue-50 via-blue-50/80 to-white">
      {/* Background Image with Overlay */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <motion.img
            src={bannerImage}
            alt="Wedding couple in field"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="text-[36px] sm:text-[48px] md:text-[60px] leading-[1.2] font-serif font-bold"
          >
            Wujudkan Pernikahan Impian Anda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-lg text-gray-200 mt-4 leading-relaxed font-poppins"
          >
            Kami menghadirkan wedding organizer profesional untuk membantu mewujudkan pernikahan impian Anda dengan
            sempurna, dari konsep hingga pelaksanaan.
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
            className="mt-6"
          >
            <a
              href="#pricing"
              className="bg-[#C58F61] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#C49061] transition-all duration-300 shadow-lg"
            >
              Pilih Paket
            </a>
          </motion.div>
        </motion.div>

        {/* Wave Effect at the Bottom */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 160" className="w-full fill-white" preserveAspectRatio="none">
            <path d="M0,96L48,101.3C96,107,192,117,288,122.7C384,128,480,128,576,122.7C672,117,768,107,864,101.3C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
