import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(-1);
  const { t } = useTranslation();
  const packages = t("pricing.packages", { returnObjects: true });

  const handleBuyPackage = (packageName) => {
    const phoneNumber = "6282115642724";
    const message = `Halo, saya tertarik dengan program ${packageName}. Bisa saya dapatkan informasi lebih lanjut?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleGoogleCalendar = () => {
    const calendarUrl =
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0bPtnwzIC3iB0vugGcemISVrKyZOzqgOgGkgYn2Cu8NFVfiGKtSxjzf91yDww-VCC9U7KkUejW";
    window.open(calendarUrl, "_blank");
  };

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl text-center mb-12 text-[#42A3A7] font-serif"
        >
          {t("pricing.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`rounded-lg p-6 border flex flex-col justify-between h-full ${
                selectedPackageIndex === index
                  ? "border-2 border-[#42A3A7] shadow-2xl"
                  : "border-gray-200"
              } cursor-pointer`}
              onClick={() => setSelectedPackageIndex(index)}
            >
              <div>
                <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
                <p className="text-2xl font-bold mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-6 max-h-48 overflow-y-auto">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FiCheckCircle className="text-[#42A3A7] text-xl mr-2" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBuyPackage(pkg.name)}
                className="mt-auto w-full bg-[#42A3A7] text-white py-3 rounded-md hover:bg-[#42A3A7]"
              >
                {t("pricing.cta")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGoogleCalendar}
                className="mt-4 w-full bg-gray-200 text-black py-3 rounded-md hover:bg-gray-300"
              >
                {t("pricing.schedule")}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
