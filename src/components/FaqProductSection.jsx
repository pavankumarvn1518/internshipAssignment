import { useState } from "react";

export default function FaqProductSection() {
  const [openIndex, setOpenIndex] = useState(1); // default open second question

  const faqs = [
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Absolutely! All our products are crafted with care to suit even the most delicate skin types.",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! All our products are cruelty-free and vegan. Cruelty-free means no animal testing at any stage.",
    },
    {
      question: "What's your return policy?",
      answer:
        "We offer a 30-day return policy on unused and sealed items with proof of purchase.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship globally. Shipping charges and delivery time may vary by destination.",
    },
    {
      question: "How do I choose the right product?",
      answer:
        "You can take our skin quiz or reach out to our skincare consultants anytime.",
    },
  ];

  return (
    <section className="bg-[#FAFAF2] px-6 py-20 text-[#2D3B36] iphone16:px-4 iphone16:py-14 ipadmini:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center iphone16:gap-6 ipadmini:gap-8">
        {/* Left Image + Help Box */}
        <div className="relative w-full">
          <img
            src="/img6.jpg"
            alt="Product FAQ"
            className="w-full h-[420px] object-cover rounded-2xl iphone16:h-[260px] ipadmini:h-[340px]"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md px-4 py-2 flex items-center gap-2 text-sm font-medium iphone16:text-xs iphone16:px-3 iphone16:py-1">
            <span className="inline-block w-5 h-5 rounded-full bg-[#2D3B36] text-white text-xs flex items-center justify-center iphone16:w-4 iphone16:h-4">
              🛎️
            </span>
            24/7 We’re Here to Help You
          </div>
        </div>

        {/* Right FAQ Content */}
        <div>
          {/* Label Button */}
          <button className="flex items-center gap-2 border border-[#2D3B36] text-[#2D3B36] px-4 py-1 rounded-full text-sm font-semibold mb-4 iphone16:text-xs iphone16:px-3 iphone16:py-[2px]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2D3B36]"></span>
            Frequently Asked Question
          </button>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 iphone16:text-lg ipadmini:text-2xl">
            Answers to Your <br /> Skincare Questions, All <br /> in One Place.
          </h2>

          <div className="flex flex-col gap-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#2D3B36] rounded-md p-4 bg-white iphone16:p-3"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                >
                  <p className="text-sm font-medium iphone16:text-xs">
                    {faq.question}
                  </p>
                  <span className="text-lg font-bold iphone16:text-base">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-600 iphone16:text-xs">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
