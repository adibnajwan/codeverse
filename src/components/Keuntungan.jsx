import { motion } from "framer-motion";
import keuntunganImage from "../assets/tentang.png"; // Ganti dengan path gambar yang sesuai
import { CheckCircle } from "lucide-react";

const KeuntunganOrder = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center md:items-start gap-12"
        >
          {/* Kiri: Teks */}
          <div className="space-y-6 flex-1">
            <h2 className="text-3xl font-serif text-[#C49061]">
            Kenapa Harus Pilih Kami? Ini Keuntungannya!            </h2>
            <div className="space-y-4">
              {[
                "Tim profesional dengan pengalaman luas di berbagai industri kreatif.",
                "Bebas menentukan konsep dan paket sesuai keinginan.",
                "Pendampingan pengantin, fitting, serta attire & seserahan.",
                "Konsultasi & Koordinasi Lengkap.",
                "Dokumentasi Momen Berharga.",
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-[#C49061] w-6 h-6" />
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kanan: Gambar */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-[20px] overflow-hidden shadow-xl flex-1"
          >
            <img
              src={keuntunganImage}
              alt="Keuntungan Order"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeuntunganOrder;
