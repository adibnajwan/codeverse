import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bannerImage from "../assets/keuntungan.png";

import Keuntungan from "./Keuntungan"; // Pastikan path-nya benar!

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 });
  }, [controls, inView]);

  return (
    <section id="about" className="py-16 px-6 md:py-20 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Bagian Tentang Kavora Coffee*/}
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
            <h2 className="text-3xl md:text-4xl font-serif text-[#C49061]">
            Cerita di Balik Kavora Coffe            </h2>
            <p className="text-gray-600 leading-relaxed">
              Berdiri sejak 2019, Kavora Coffee adalah wedding organizer
              profesional yang berkomitmen menghadirkan pernikahan impian bagi
              setiap pasangan. Didirikan oleh alumni Universitas Bandar Lampung,
              kami memiliki tim inti berjumlah 6–12 orang yang berpengalaman
              dalam merancang, mengelola, dan mewujudkan momen spesial dengan
              sempurna. <br /> <br />Dengan perhatian pada detail dan pelayanan terbaik, kami
              siap menjadikan hari bahagia Anda tak terlupakan. Dengan
              kreativitas, ketelitian, dan layanan terbaik, kami memastikan
              setiap detail pernikahan berjalan sempurna. Percayakan momen
              spesial Anda kepada kami, dan biarkan kami menjadikannya indah
              serta tak terlupakan.
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
