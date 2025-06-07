const Services = () => {
  const services = ["Dekorasi", "Koordinasi Acara", "Perencanaan"];
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-2">{service}</h3>
              <p className="text-[#42A3A7]">
                Pilih Program Kursus, Wujudkan Karier Coding Impian! {service}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
