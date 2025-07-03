import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.data", { returnObjects: true });

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-6">{t("testimonials.title")}</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
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
              <div className="bg-blue p-6 pt-8 rounded-xl shadow-lg flex flex-col items-center justify-between min-h-[220px] max-w-sm mx-auto">
                <div className="text-xl font-semibold text-[#003940] text-center">
                  {testimonial.name}
                </div>
                <div className="flex my-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-blue-400" />
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
