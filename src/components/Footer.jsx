export default function Footer() {
  return (
    <footer className="bg-[#2D3B36] text-white py-7 px-6 relative overflow-hidden iphone16:px-4 iphone16:py-6 ipadmini:px-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-6 iphone16:gap-6 ipadmini:gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 iphone16:text-xl ipadmini:text-2xl">
            Join The Skincare <br /> Community Now.
          </h2>
        </div>

        {/* Right Column */}
        <div className="md:text-right">
          <p className="text-sm mb-1 iphone16:text-xs">Get in Touch</p>
          <p className="text-xl font-semibold iphone16:text-lg">contact.skincare.com</p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 text-sm text-gray-300 mb-0 iphone16:text-xs">
        {/* Left Social Links */}
        <div className="flex gap-6 flex-wrap iphone16:gap-4">
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">YouTube</a>
        </div>

        {/* Spacer */}
        <div className="hidden md:block"></div>

        {/* Right Legal Links */}
        <div className="flex gap-6 justify-start md:justify-end flex-wrap iphone16:gap-4">
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Cookies Policy</a>
        </div>
      </div>

      {/* Large Faint SKINCARE Text */}
      <div className="w-full text-center mt-1 leading-none">
        <span className="text-[270px] font-extrabold text-white/5 tracking-wider select-none hidden md:inline-block ipadmini:text-[200px]">
          SKINCARE
        </span>
      </div>
    </footer>
  );
}
