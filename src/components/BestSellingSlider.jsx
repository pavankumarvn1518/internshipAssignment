import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function BestSellingSlider() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  const products = [
    {
      id: 1,
      name: "ALYA SKIN CLEANSER.",
      price: "FROM $29.99",
      image: "/img4.jpg",
    },
    {
      id: 2,
      name: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
      image: "/img5.jpg",
    },
    {
      id: 3,
      name: "THE BODY LOTION.",
      price: "FROM $19.99",
      image: "/img6.jpg",
    },
    {
      id: 4,
      name: "NATURAL FACE WASH.",
      price: "FROM $24.99",
      image: "/img1.jpg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#E7E8E0] px-6 py-14 text-[#2D3B36] relative"
    >
      {/* Header Row with Top-Right Navigation */}
      <div className="flex justify-between items-start mb-6">
        {/* Left: Label Button */}
        <button className="flex items-center gap-2 border border-[#2D3B36] text-[#2D3B36] px-4 py-1 rounded-full text-sm font-semibold">
          <span className="inline-block w-2 h-2 rounded-full bg-[#2D3B36]"></span>
          Best Selling Products
        </button>

        {/* Right: Navigation Buttons (TOP RIGHT) */}
        <div className="flex gap-3">
          <button className="swiper-button-prev !static w-9 h-9 rounded-full border border-[#2D3B36] flex items-center justify-center text-lg iphone16:w-8 iphone16:h-8 iphone16:text-base ipadmini:w-10 ipadmini:h-10">
            ←
          </button>
          <button className="swiper-button-next !static w-9 h-9 rounded-full bg-[#2D3B36] text-white flex items-center justify-center text-lg iphone16:w-8 iphone16:h-8 iphone16:text-base ipadmini:w-10 ipadmini:h-10">
            →
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center iphone16:text-xl ipadmini:text-2xl">
        Skincare That Brings Out <br className="hidden md:block" />
        Your Natural Radiance
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-6"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[280px] object-cover iphone16:h-[200px] ipadmini:h-[240px]"
              />
              <div className="p-4 flex justify-between items-end">
                <div>
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                  <p className="text-xs text-gray-600">{product.price}</p>
                </div>
                <button className="bg-[#f1f4e3] p-2 rounded-full text-xl">
                  🛒
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
