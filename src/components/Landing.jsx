import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Landing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#edf2dc] min-h-screen px-8 py-10 text-[#1f1f1f] relative overflow-hidden iphone16:px-4 iphone16:py-6 ipadmini:px-6"
    >
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 iphone16:gap-3">
        {/* Brand */}
        <h1 className="font-bold text-xl tracking-wide text-[#2D3B36]">
          SKINCARE
        </h1>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-[#2D3B36] iphone16:gap-2">
          <a href="#">All Products</a>
          <a href="#">Serum</a>
          <a href="#">Sunscreen</a>
          <a href="#">Bundle</a>
        </nav>

        {/* Right Icons */}
        <div className="flex gap-3 items-center iphone16:gap-2">
          <div className="p-2 rounded-full bg-[#f7fadc] text-[#2D3B36] text-sm font-medium text-center iphone16:text-xs">
            🛍️ Cart (1)
          </div>

          <div className="relative w-6 h-6">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
              style={{
                top: "2.74px",
                left: "1.67px",
                opacity: 0.5,
              }}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                   4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 
                   3.81 14.76 3 16.5 3 19.58 3 22 5.42 
                   22 8.5c0 3.78-3.4 6.86-8.55 
                   11.54L12 21.35z"
                stroke="#2D3B36"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <div className="p-2 rounded-full bg-[#f7fadc] text-[#2D3B36]">
            👤
          </div>
        </div>
      </header>

      {/* Top Section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-10 iphone16:gap-4 ipadmini:gap-6">
        {/* Left Subheading */}
        <p className="text-lg max-w-xs leading-relaxed font-medium iphone16:text-sm iphone16:max-w-full">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>

        {/* Center Headline */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center leading-tight uppercase iphone16:text-3xl ipadmini:text-4xl">
          GLOW <br /> NATUR- <br /> ALLY
        </h2>

        {/* Right Product Image */}
        <div className="flex justify-end">
          <div className="border-2 border-[#c8c8f4] p-1 rounded-md">
            <img
              src="/img1.jpg"
              alt="Product"
              className="w-32 h-auto shadow-lg rounded iphone16:w-24"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-start mb-16 iphone16:mb-10">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition font-semibold iphone16:text-sm iphone16:px-4 iphone16:py-2">
          Shop Now
        </button>
      </div>

      {/* SKINCARE Text & Overlay Image */}
      <div className="relative w-full h-[275px] mb-12 iphone16:h-[160px]">
        <h1
          className="absolute uppercase font-[Inter] font-extrabold text-[170px] md:text-[378px] leading-none tracking-[0] text-[#2D3B36] whitespace-nowrap iphone16:text-[80px] ipadmini:text-[220px]"
          style={{
            width: "1900px",
            height: "275px",
            top: "0px",
            left: "-18px",
            lineHeight: "100%",
          }}
        >
          SKINCARE
        </h1>

        <img
          src="/img2.jpg"
          alt="Model Front"
          className="absolute left-1/2 w-[300px] h-[340px] -translate-x-1/2 -translate-y-[25px] rounded-[30px] z-10 object-cover iphone16:w-[180px] iphone16:h-[200px] ipadmini:w-[240px] ipadmini:h-[270px]"
        />
      </div>

      {/* Description Paragraph */}
      <div className="text-lg text-gray-800 font-medium max-w-5xl leading-relaxed iphone16:text-base iphone16:leading-normal">
        <p>
          Experience the ultimate in skincare with our expertly formulated products,
          crafted to nourish, protect, and rejuvenate your skin. Combining the finest
          <span className="font-semibold text-black"> natural ingredients</span> with
          advanced science, our collection ensures every skin type can achieve a
          radiant, healthy glow. Embrace your beauty with confidence every day.
        </p>
      </div>
    </div>
  );
}
