import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: "1,500+", text: "Siswa Belajar di Codeverse" },
  { number: "50+", text: "Mentor Profesional" },
  { number: "12", text: "Program Bootcamp Aktif" },
  { number: "300+", text: "Alumni Bekerja di Industri" },
];

const Stats = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="py-12 px-4 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <motion.p
              initial={{ scale: 0.8 }}
              animate={controls}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0.8 },
              }}
              className="text-4xl font-bold text-[#42A3A7] mb-2 font-poppins"
            >
              {stat.number}
            </motion.p>
            <p className="text-gray-700 font-medium font-serif">{stat.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
