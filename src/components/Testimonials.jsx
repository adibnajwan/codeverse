import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Data testimoni
const testimonials = [
  {
    name: "Risha & Misdar",
    content:
      "Acara pernikahan kami berjalan sempurna! Tim sangat profesional dan detail.",
    rating: 5,
  },
  {
    name: "Tomi & Rulina",
    content: "Dekorasi indah, pelayanan ramah, dan sangat membantu dari awal hingga akhir!",
    rating: 5,
  },
  {
    name: "Febri & Iis",
    content: "WO terbaik! Semua berjalan lancar tanpa kendala. Highly recommended!",
    rating: 4,
  },
  {
    name: "Adi & Tiara",
    content: "Dream wedding kami jadi kenyataan. Terima kasih atas kerja kerasnya!",
    rating: 5,
  },
  {
    name: "Putra & Aini",
    content: "Pelayanan luar biasa! Kami tidak perlu khawatir sama sekali di hari H.",
    rating: 4,
  },
  {
    name: "Irfan & Nada",
    content: "Pernikahan yang elegan dan berkesan, terima kasih atas segalanya!",
    rating: 5,
  },
];

// Komponen Testimoni
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-6">Testimoni Pelanggan</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Default untuk mobile
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-between min-h-[220px] max-w-sm mx-auto">
                <div className="text-xl font-semibold text-[#C49061] text-center">
                  {testimonial.name}
                </div>
                <div className="flex my-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-center text-sm md:text-base">
                  &#34;{testimonial.content}&#34;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
