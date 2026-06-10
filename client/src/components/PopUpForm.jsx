import { useEffect, useState } from "react";
import { X } from "lucide-react";

function PopupForm() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
});

const [loading, setLoading] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;



  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await fetch(
      "http://localhost:5000/api/leads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Thank you! Our team will contact you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });

      setShowPopup(false);
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-xl px-4">
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-125 h-125 bg-[#0A2A66]/30 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]"></div>
      </div>

      {/* POPUP */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-[#030814]/95 backdrop-blur-3xl shadow-[0_0_80px_rgba(10,42,102,0.35)]">
        {/* CLOSE */}
        <button
          onClick={closePopup}
          className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#F5B301] hover:text-black transition-all duration-300 flex items-center justify-center text-white"
        >
          <X size={22} />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative p-10 md:p-14 bg-linear-to-br from-[#02050d] via-[#061224] to-[#0A2A66]/40 overflow-hidden">
            {/* GLOWS */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#0A2A66]/40 blur-[140px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F5B301]/10 blur-[120px] rounded-full"></div>

            {/* ROTATING RING */}
            <div className="absolute bottom-10 right-10 w-40 h-40 border border-[#F5B301]/20 rounded-full animate-spin [animation-duration:18s]"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0A2A66]/40 border border-[#F5B301]/20 backdrop-blur-xl mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F5B301] animate-ping"></span>

                <p className="uppercase tracking-[4px] text-xs font-semibold text-[#F5B301]">
                  Free Demo Class
                </p>
              </div>

              <h2 className="text-5xl font-black leading-tight mb-6">
                Welcome To
                <span className="block text-[#F5B301]">
                  DMIO
                </span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-10">
                Learn digital marketing from industry experts with
                hands-on projects, AI tools, live campaigns,
                certifications, and career-focused mentorship.
              </p>

              <div className="space-y-5">
                {[
                  "Industry Expert Mentors",
                  "Live Practical Projects",
                  "Placement Assistance",
                  "AI Marketing Training",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#F5B301] animate-pulse"></div>

                    <p className="text-gray-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative p-10 md:p-14 bg-[#02050d]">
            {/* GLOW */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#F5B301]/10 blur-[80px] rounded-full"></div>

            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-3">
                Book Your
                <span className="text-[#F5B301]">
                  {" "}Free Demo
                </span>
              </h3>

              <p className="text-gray-400 mb-10">
                Fill the form and our team will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-3 text-gray-300">
                    Full Name
                  </label>

                  <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your name"
  className="w-full h-14 rounded-2xl bg-white/3 border border-white/10 px-5 outline-none focus:border-[#F5B301]/60 focus:bg-[#0A2A66]/10 transition-all duration-300"
  required
/>
                </div>

                <div>
                  <label className="block mb-3 text-gray-300">
                    Email Address
                  </label>

<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  className="w-full h-14 rounded-2xl bg-white/3 border border-white/10 px-5 outline-none focus:border-[#F5B301]/60 focus:bg-[#0A2A66]/10 transition-all duration-300"
  required
/>
                </div>

                <div>
                  <label className="block mb-3 text-gray-300">
                    Mobile Number
                  </label>

                  <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Enter your mobile number"
  className="w-full h-14 rounded-2xl bg-white/3 border border-white/10 px-5 outline-none focus:border-[#F5B301]/60 focus:bg-[#0A2A66]/10 transition-all duration-300"
  required
/>
                </div>

                <div>
                  <label className="block mb-3 text-gray-300">
                    Choose Course
                  </label>

                 <select
  name="course"
  value={formData.course}
  onChange={handleChange}
  className="w-full h-14 rounded-2xl bg-white/3 border border-white/10 px-5 outline-none focus:border-[#F5B301]/60 transition-all duration-300"
  required
>
  <option value="" className="bg-[#02050d]">
    Select Course
  </option>

  <option className="bg-[#02050d]">
    SEO Marketing
  </option>

  <option className="bg-[#02050d]">
    Social Media Marketing
  </option>

  <option className="bg-[#02050d]">
    Performance Marketing
  </option>

  <option className="bg-[#02050d]">
    AI Marketing
  </option>

  <option className="bg-[#02050d]">
    Content Strategy
  </option>
</select>
                </div>

               <button
  type="submit"
  disabled={loading}
  className="w-full h-14 rounded-2xl bg-[#F5B301] text-black font-bold text-lg hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(245,179,1,0.4)] transition-all duration-500 disabled:opacity-50"
>
  {loading ? "Submitting..." : "Submit Now"}
</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupForm;