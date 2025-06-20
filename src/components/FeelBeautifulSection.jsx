// src/components/FeelBeautifulSection.jsx
export default function FeelBeautifulSection() {
  return (
    <section className="bg-[#FAFAF2] px-6 py-14 text-white">
      <div className="relative rounded-xl overflow-hidden border-2 border-yellow-400">
        {/* Background Image */}
        <img
          src="/img7.png"
          alt="Feel Beautiful"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center text-center px-6 pb-10">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Feel Beautiful Inside and Out <br /> with Every Product.
          </h2>

          {/* Button */}
          <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-md hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
