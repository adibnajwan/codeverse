import { motion } from "framer-motion";
import { Link } from "react-scroll"; // 1. Import Link
import "@fontsource/playfair-display";
import "@fontsource/poppins";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      <div className="relative z-10 text-center px-6 py-20 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[28px] sm:text-[36px] md:text-[44px] font-playfair font-semibold text-[#42A3A7] leading-snug"
        >
          Platform Bootcamp Online Interaktif untuk Masa Depanmu di Dunia Digital
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-base sm:text-lg text-gray-700 font-poppins leading-relaxed"
        >
          Codeverse membantumu belajar pemrograman dan teknologi terkini secara fleksibel.
          Ikuti program bootcamp bersama mentor ahli, bangun portofolio nyata, dan mulai karier impianmu di industri digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8" // Menambah margin-top
        >
          {/* 2. Tambahkan Tombol dengan Link */}
          <Link
            to="pricing" // Arahkan ke section dengan id="pricing"
            smooth={true}
            duration={500}
            offset={-70} // Sesuaikan offset dengan tinggi navbar
            className="inline-block bg-[#42A3A7] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-colors cursor-pointer"
          >
            Lihat Program
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;