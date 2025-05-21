import { motion } from "framer-motion";

const TeamInfo = () => {
  return (
    <div className="min-h-screen bg-[#f4f6fa] py-16 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white border border-[#d1d5db] shadow-xl rounded-3xl overflow-hidden grid md:grid-cols-2"
      >
        {/* Kiri: Header */}
        <div className="bg-[#1e293b] p-10 flex flex-col justify-center items-center text-center relative">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Codeverse
          </h1>
          <div className="h-1 w-14 bg-[#38bdf8] rounded-full mb-3"></div>
          <p className="text-gray-300 text-sm">
            Muhammad Adib Najwan — 22.11.5039<br />
            Shevryna B Intari — 22.11.5032<br />
            Honnasan Yousouf —  22.11.5052
          </p>
        </div>

        {/* Kanan: Isi */}
        <div className="p-10 space-y-5 text-[#1e293b] text-base leading-relaxed">
          <p>
            Codeverse adalah platform kursus online yang berfokus pada bidang IT, mulai dari pemrograman web, data science,
            hingga UI/UX dan DevOps. Kami hadir untuk membantu pelajar, mahasiswa, dan fresh graduate meningkatkan skill
            mereka secara praktis dan terarah.
          </p>
          <p>
            Website ini tidak hanya menawarkan materi video dan latihan interaktif, tapi juga menghadirkan mentor profesional,
            komunitas belajar, dan sertifikat penyelesaian untuk memperkuat CV peserta.
          </p>
          <p>
            Dengan tampilan yang clean, bahasa yang ringan, dan alur belajar yang fleksibel, Codeverse menjadi teman belajar
            terbaik untuk kamu yang ingin mulai atau mengembangkan karier di dunia teknologi.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamInfo;
