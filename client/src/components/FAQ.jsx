import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      question: "What is DMIO?",
      answer:
        "DMIO is a modern digital marketing institute offering practical training in SEO, Social Media Marketing, AI Marketing, Branding, Performance Marketing, and more.",
    },

    {
      question: "Do you provide certifications?",
      answer:
        "Yes, DMIO provides industry-recognized certifications upon successful completion of the course.",
    },

    {
      question: "Are the classes online or offline?",
      answer:
        "We offer both online and offline learning options with flexible schedules to suit every learner.",
    },

    {
      question: "Can beginners join DMIO?",
      answer:
        "Absolutely. Our programs are designed for complete beginners as well as professionals looking to upgrade their skills.",
    },

    {
      question: "Will I get practical projects?",
      answer:
        "Yes, students work on real-world projects, campaigns, live case studies, and practical assignments.",
    },

    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we provide portfolio building, resume guidance, interview preparation, and placement assistance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 bg-linear-to-b from-black via-[#061224] to-[#02050d] overflow-hidden text-white">
      {/* PREMIUM GLOW */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-[#0A2A66]/30 blur-[170px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      {/* MOVING LIGHT */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_10s_linear_infinite]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* HEADING */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#F5B301]/20 bg-[#0A2A66]/40 backdrop-blur-2xl mb-8">
            <span className="w-3 h-3 rounded-full bg-[#F5B301] animate-ping"></span>

            <p className="uppercase tracking-[4px] text-sm text-[#F5B301] font-semibold">
              FAQ
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Everything You Need
            <span className="block text-[#F5B301] animate-pulse">
              To Know
            </span>
          </h2>

          <div className="h-0.75 w-48 rounded-full bg-linear-to-r from-[#F5B301] to-transparent mx-auto mb-8"></div>

          <p className="text-xl text-gray-300">
            Got Questions? We Got Answers.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[28px] overflow-hidden hover:border-[#F5B301]/20 hover:bg-[#0A2A66]/30 transition-all duration-700"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B301]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-6 relative z-10"
                >
                  <h3 className="text-xl font-semibold pr-5 group-hover:text-[#F5B301] transition duration-500">
                    {faq.question}
                  </h3>

                  <div className="min-w-11.25 h-11.25 rounded-xl bg-[#061224] border border-[#F5B301]/20 flex items-center justify-center text-[#F5B301]">
                    {openIndex === index ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {faqs.slice(3, 6).map((faq, index) => {
              const actualIndex = index + 3;

              return (
                <div
                  key={actualIndex}
                  className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[28px] overflow-hidden hover:border-[#F5B301]/20 hover:bg-[#0A2A66]/30 transition-all duration-700"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B301]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full flex items-center justify-between text-left p-6 relative z-10"
                  >
                    <h3 className="text-xl font-semibold pr-5 group-hover:text-[#F5B301] transition duration-500">
                      {faq.question}
                    </h3>

                    <div className="min-w-11.25 h-11.25 rounded-xl bg-[#061224] border border-[#F5B301]/20 flex items-center justify-center text-[#F5B301]">
                      {openIndex === actualIndex ? (
                        <Minus size={22} />
                      ) : (
                        <Plus size={22} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openIndex === actualIndex
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;