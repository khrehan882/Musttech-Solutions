import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Brooklyn Simmons",
    company: "manam",
    image: "/images/blog/avatar1.svg",
    quote:
      "Working with this team transformed our online presence—professional, efficient, and results-driven!",
  },
  {
    name: "Esther Howard",
    company: "Offmax",
    image: "/images/blog/avatar2.svg",
    quote:
      "They truly understood our needs and delivered a product that exceeded our expectations.",
  },
  {
    name: "Jane Cooper",
    company: "unpexel",
    image: "/images/blog/avatar3.svg",
    quote:
      "Their expertise and dedication helped us grow our brand and reach more customers. The attention to detail in their work was exceptional, and the results speak for themselves.",
  },
  {
    name: "Arlene McCoy",
    company: "bloopixel",
    image: "/images/blog/avatar4.svg",
    quote:
      "From start to finish, the experience was seamless. Their team guided us through every step, and the final results were beyond what we imagined. They really know how to make your brand shine online.",
  },
  {
    name: "Darlene Robertson",
    company: "techtros",
    image: "/images/blog/avatar3.svg",
    quote:
      "Their service was outstanding and provided great value. Highly recommended!",
  },
  {
    name: "Cody Fisher",
    company: "logica",
    image: "/images/blog/avatar2.svg",
    quote:
      "A truly collaborative and innovative team that delivered remarkable results.",
  },
];



export default function Testimonials() {
  return (
    <section className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="self-center md:self-end text-xs md:text-base font-bold text-white md:text-base">
            {"Hear what our customers say :)"}
          </h2>
          <div className="flex gap-2 md:gap-4">
            <button
              className="custom-swiper-button-prev rounded border border-customred p-2 md:p-4 text-customred transition-colors hover:bg-customred hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              className="custom-swiper-button-next rounded border border-customred p-2 md:p-4 text-customred transition-colors hover:bg-customred hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={1}
          breakpoints={{
            240: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg border border-[#A1AEBF]   bg-[#0F0F0F] p-6">
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm font-bold text-white/100">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <blockquote className="font-bold text-gray-300">
                  {testimonial.quote}
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
