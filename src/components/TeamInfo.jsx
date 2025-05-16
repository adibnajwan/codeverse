import { motion } from "framer-motion";

const TeamInfo = () => {
  return (
    <div className="min-h-screen bg-[#f4efe9] py-16 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-[#fffdf9] border border-[#d6b98c] shadow-lg rounded-3xl overflow-hidden grid md:grid-cols-2"
      >
        {/* Kiri: Header */}
        <div className="bg-[#efe3d1] p-10 flex flex-col justify-center items-center text-center relative">
          <h1 className="text-3xl md:text-4xl font-bold text-[#5b402f] mb-3">
            Kavora Coffee
          </h1>
          <div className="h-1 w-14 bg-[#b48c5e] rounded-full mb-3"></div>
          <p className="text-[#5b402f] text-sm">
            Muhammad Adib Najwan — 22.11.5039
          </p>
        </div>

        {/* Kanan: Isi */}
        <div className="p-10 space-y-5 text-[#3b3b3b] text-base leading-relaxed">
          <p>
            Kavora Coffee adalah sebuah brand kopi yang menyasar remaja dan mahasiswa dengan konsep tempat nongkrong yang affordable,
            cozy, dan kekinian.
          </p>
          <p>
            Website ini akan menjadi platform online untuk memperkenalkan suasana, menu, dan promo-promo menarik dari Kavora. Selain
            menampilkan informasi seputar kopi dan suasana tempat, website juga bertujuan untuk mengumpulkan email pengunjung yang
            tertarik dengan promo mingguan atau event spesial seperti Live DJ dan diskon mahasiswa.
          </p>
          <p>
            Dengan gaya bahasa yang casual dan dekat dengan keseharian anak muda, website ini diharapkan bisa menarik perhatian mereka
            yang mencari tempat nongki nyaman dan hemat.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamInfo;
