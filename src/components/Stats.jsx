import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();
  const stats = t("stats", { returnObjects: true });

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <section className="py-12 px-4 bg-white">
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
      >
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
            <p className="text-gray-700 font-medium font-serif">
              {stat.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
