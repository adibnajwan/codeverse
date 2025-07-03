import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import bannerImage from "../assets/foto1.jpg";
import Keuntungan from "./Keuntungan";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });
  const { t } = useTranslation();

  useEffect(() => {
    controls.start(inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 });
  }, [controls, inView]);

  return (
    <section id="about" className="py-16 px-6 md:py-20 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Bagian Tentang codeverse */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="grid md:grid-cols-2 items-start gap-10 md:gap-14"
        >
          {/* Kiri: Gambar */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={bannerImage}
              alt="Creative solutions"
              className="w-full h-auto object-cover rounded-[25px]"
            />
          </motion.div>

          {/* Kanan: Teks dan Heading */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#42A3A7]">
              {t("about.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {t("about.paragraph")}
            </p>
          </div>
        </motion.div>

        {/* Bagian Keuntungan */}
        <div className="mt-12 md:mt-16">
          <Keuntungan />
        </div>
      </div>
    </section>
  );
};

export default About;
