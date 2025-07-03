import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiBookOpen } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const HighlightAccordion = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Gunakan returnObjects: true agar .title dan .topics bisa diakses
  const keys = ["frontend", "backend", "fullstack", "ml"];
  const highlights = keys.map((key) =>
    t(`highlight.${key}`, { returnObjects: true })
  );

  return (
    <section id="highlight" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-center text-[#42A3A7] font-serif mb-10">
          {t("highlight.title")}
        </h2>

        <div className="space-y-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-[#003940] font-semibold text-lg hover:bg-gray-100 transition"
              >
                <span className="flex items-center gap-3">
                  <FiBookOpen className="text-[#42A3A7]" size={20} />
                  {item.title}
                </span>
                {openIndex === index ? (
                  <FiChevronUp size={20} className="text-[#42A3A7]" />
                ) : (
                  <FiChevronDown size={20} className="text-[#42A3A7]" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                      {item.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightAccordion;
