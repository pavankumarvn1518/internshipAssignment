import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WhyOurProducts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#E7E8E0] text-[#1f1f1f] px-8 py-12 grid md:grid-cols-2 gap-12 items-center iphone16:px-4 iphone16:py-8 ipadmini:px-6"
    >
      {/* Left Side Text */}
      <div>
        <button className="border border-[#2D3B36] text-[#2D3B36] px-4 py-1 rounded-full text-sm font-semibold mb-4 iphone16:text-xs iphone16:px-3 iphone16:py-[2px]">
          📍 Why Our Products
        </button>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight iphone16:text-2xl ipadmini:text-3xl">
          YOUR SKIN DESERVES <br />
          THE BEST CARE.
        </h2>

        <p className="text-gray-700 text-lg max-w-md mb-10 iphone16:text-sm iphone16:max-w-full">
          Discover a curated collection of skincare products designed to rejuvenate,
          protect, and pamper your skin. Explore our range crafted with love backed by science,
          and inspired by nature.
        </p>

        <div className="space-y-6">
          {/* Feature 1 */}
          <div>
            <h3 className="text-xl font-semibold iphone16:text-base">
              <span className="text-gray-500 mr-2">01</span> Bio Ingredients
            </h3>
            <p className="text-gray-600 text-base mt-1 iphone16:text-sm">
              Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <h3 className="text-xl font-semibold iphone16:text-base">
              <span className="text-gray-500 mr-2">02</span> Everything Natural
            </h3>
            <p className="text-gray-600 text-base mt-1 iphone16:text-sm">
              Pure ingredients for pure skin. The perfect solution for your skin care needs.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <h3 className="text-xl font-semibold iphone16:text-base">
              <span className="text-gray-500 mr-2">03</span> All Handmade
            </h3>
            <p className="text-gray-600 text-base mt-1 iphone16:text-sm">
              Made with love and care. Just for you. Give your skin the tender loving care it deserves.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative">
        <img
          src="/img3.png"
          alt="Model skincare"
          className="w-full max-w-md mx-auto rounded-2xl shadow-md iphone16:max-w-xs ipadmini:max-w-sm"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#e9f2db] text-[#2D3B36] text-sm px-4 py-2 rounded-full shadow-md font-medium iphone16:text-xs iphone16:px-3 iphone16:py-1">
          🏆 Best Skin Care Product Award Winning
        </div>
      </div>
    </section>
  );
}
