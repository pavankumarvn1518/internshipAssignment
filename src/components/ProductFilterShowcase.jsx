export default function ProductFilterShowcase() {
  const categories = ["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGGING"];

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
  ];

  return (
    <section className="bg-[#FAFAF2] px-6 py-14 text-[#2D3B36] iphone16:px-4 iphone16:py-10 ipadmini:px-8">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 iphone16:text-xl ipadmini:text-2xl">
        Feel Beautiful Inside and Out <br /> with Every Product.
      </h2>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-4 mb-10 iphone16:gap-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-4 py-1 rounded-full border ${
              idx === 0
                ? "bg-[#2D3B36] text-white"
                : "border-[#2D3B36] text-[#2D3B36]"
            } text-sm font-medium iphone16:text-xs iphone16:px-3 iphone16:py-[6px]`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto iphone16:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover iphone16:h-[250px] ipadmini:h-[320px]"
            />
            <div className="p-4 flex justify-between items-end iphone16:p-3">
              <div>
                <h3 className="text-sm font-semibold iphone16:text-xs">{product.name}</h3>
                <p className="text-xs text-gray-600 iphone16:text-[10px]">{product.price}</p>
              </div>
              <button className="bg-[#f1f4e3] p-2 rounded-full text-xl iphone16:p-1 iphone16:text-lg">
                🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
