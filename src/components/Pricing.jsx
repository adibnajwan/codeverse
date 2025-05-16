import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const packages = [
  {
    name: "KYOTO",
    price: "Rp.3.300.000",
    features: [
      "Wedding Konsep & Idea",
      "Pembuatan Rundown",
      "3x Meeting",
      "Koordinator Vendor",
      "Koordinator Keluarga",
      "8 Jam Kerja",
      "1 Box Amplop",
    ],
  },
  {
    name: "OSAKA",
    price: "Rp.5.000.000",
    features: [
      "Wedding Konsep & Idea",
      "Pembuatan Rundown",
      "3x Meeting",
      "Koordinator Vendor",
      "Koordinator Keluarga",
      "8 Jam Kerja",
      "1 Box Amplop",
    ],
  },
  {
    name: "TOKYO",
    price: "Rp.7.500.000",
    features: [
    "Wedding Konsep & Idea",
      "Pembuatan Rundown",
      "3x Meeting",
      "Koordinator Vendor",
      "Koordinator Keluarga",
      "8 Jam Kerja",
      "1 Box Amplop",
    ],
  },
  {
    name: "FUJI",
    price: "Rp.30/50.000.000",
    features: [
      "Wedding Konsep & Idea",
      "Pembuatan Rundown",
      "3x Meeting",
      "Koordinator Vendor",
      "Koordinator Keluarga",
      "8 Jam Kerja",
      "1 Box Amplop",
      "Bisa Request Jumlah Team"
      
    ],
  },
];

const Pricing = () => {
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(-1);

  const handleBuyPackage = (packageName) => {
    const phoneNumber = "6289630488945";
    const message = `Halo, saya tertarik dengan paket ${packageName}. Bisa saya dapatkan informasi lebih lanjut?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  

  const handleGoogleCalendar = () => {
    const calendarUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1FMiKsh9zaMTnA2MnFBclLuBvL25_aWrgABC3ZI89T7CBNMSEVwxcbj9bfH-cY937VtrLnQFEA?gv=true";
    window.open(calendarUrl, "_blank");
  };

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl text-center mb-12 text-[#C49061] font-serif">
  Pilih Paket, Wujudkan Pernikahan Impian!

        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`rounded-lg p-6 border flex flex-col justify-between h-full ${
                selectedPackageIndex === index ? "border-2 border-[#C58F61] shadow-2xl" : "border-gray-200"
              } cursor-pointer`}
              onClick={() => setSelectedPackageIndex(index)}
            >
              <div>
                <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
                <p className="text-2xl font-bold mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-6 max-h-48 overflow-y-auto">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FiCheckCircle className="text-[#C49061] text-xl mr-2" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleBuyPackage(pkg.name)} className="mt-auto w-full bg-[#C58F61] text-white py-3 rounded-md hover:bg-[#C49061]">
                Ambil Paket Ini!
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleGoogleCalendar} className="mt-4 w-full bg-gray-200 text-black py-3 rounded-md hover:bg-gray-300">
                Buat Janji Temu
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;