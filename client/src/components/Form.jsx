import { useState } from "react";

function Form() {
  const [selectedCourse, setSelectedCourse] =
  useState("SEO Marketing");

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  course: "SEO Marketing",
  message: "",
});

const [loading, setLoading] = useState(false);


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
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "SEO Marketing",
        message: "",
      });
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
    <section
      id="enroll-form"
      className="relative py-32 bg-linear-to-b from-[#02050d] via-[#061224] to-black overflow-hidden text-white"
    >
      {/* PREMIUM GLOW */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-[#0A2A66]/30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      {/* MOVING LIGHT */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_10s_linear_infinite]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_0_80px_rgba(10,42,102,0.25)]">
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="relative p-10 md:p-14 bg-linear-to-br from-[#02050d] via-[#061224] to-[#0A2A66] overflow-hidden">
              <div className="absolute top-0 left-0 w-80 h-80 bg-[#F5B301]/10 blur-[120px] rounded-full animate-pulse"></div>

              <div className="absolute bottom-10 right-10 w-40 h-40 border border-[#F5B301]/20 rounded-full animate-spin [animation-duration:15s]"></div>

              <div className="relative z-10">
                <p className="uppercase tracking-[6px] text-[#F5B301] mb-5 font-semibold">
                  DMAO Institute
                </p>

                <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                  Start Your
                  <span className="block text-[#F5B301] animate-pulse">
                    Digital Journey
                  </span>
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg mb-10">
                  Join DMAO and learn practical digital marketing with
                  industry experts, live projects, certifications, and
                  career-focused training programs.
                </p>

                <div className="space-y-5">
                  {[
                    "Industry Expert Mentors",
                    "Live Practical Projects",
                    "Placement Assistance",
                    "AI Marketing Training",
                    "Certification Programs",
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

            {/* RIGHT SIDE */}
            <div className="relative p-10 md:p-14 bg-[#02050d]">
              <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-linear-to-r from-[#F5B301]/20 to-[#0A2A66]/20 blur-2xl animate-bounce"></div>

              <div className="relative z-10">
                <h3 className="text-4xl font-black mb-3">
                  Enroll Now
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
  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-[#F5B301] focus:ring-2 focus:ring-[#F5B301]/20 transition duration-300"
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
  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-[#F5B301] focus:ring-2 focus:ring-[#F5B301]/20 transition duration-300"
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
  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-[#F5B301] focus:ring-2 focus:ring-[#F5B301]/20 transition duration-300"
  required
/>
                  </div>

                  <div>
                    <label className="block mb-3 text-gray-300">
                      Select Course
                    </label>

                   <select
  name="course"
  value={formData.course}
  onChange={(e) => {
    setSelectedCourse(e.target.value);

    setFormData({
      ...formData,
      course: e.target.value,
    });
  }}
  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-[#F5B301] focus:ring-2 focus:ring-[#F5B301]/20 transition duration-300 text-white"
>
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
</select>
                  </div>

                  <div>
                    <label className="block mb-3 text-gray-300">
                      Message
                    </label>

                   <textarea
  rows="4"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Write your message..."
  className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-[#F5B301] focus:ring-2 focus:ring-[#F5B301]/20 transition duration-300 resize-none"
></textarea>
                  </div>

                 <button
  type="submit"
  disabled={loading}
  className="w-full h-14 rounded-2xl bg-linear-to-r from-[#F5B301] to-[#d99b00] text-black hover:scale-[1.02] transition duration-500 font-bold text-lg shadow-[0_0_40px_rgba(245,179,1,0.25)] disabled:opacity-50"
>
  {loading ? "Submitting..." : "Submit Application"}
</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;