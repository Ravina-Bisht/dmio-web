import { useParams } from "react-router-dom";
import coursesData from "../data/courseData";
import { useState } from "react";
import {
  Check,
  Sparkles,
  Star,
} from "lucide-react";

function CoursePage() {
  const { courseId } = useParams();

  const course = coursesData[courseId];

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  course: course.title,
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
      "https://dmio-backend.onrender.com/api/leads",
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
        course: course.title,
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

  if (!course) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white text-4xl font-bold">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${course.image})`,
          }}
        />

       <div className="absolute inset-0 bg-linear-to-r from-[#02050D]/95 via-[#02050D]/85 to-[#0A2A66]/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32">
         <p className="uppercase tracking-[8px] text-[#F5B301] mb-6">
            DMIO Course
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            {course.title}
          </h1>

         <h2 className="text-2xl md:text-3xl text-[#F5B301] font-bold mb-8">
            {course.subtitle}
          </h2>

          <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
            {course.about}
          </p>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
     <section className="py-28 relative bg-linear-to-b from-[#02050D] via-[#061224] to-[#02050D]">
       <div className="absolute top-20 left-20 w-125 h-125 bg-[#0A2A66]/30 blur-[180px] rounded-full"></div>
       <div className="absolute bottom-10 right-10 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-5">
              What You Will Learn
            </h2>

            <p className="text-gray-300 text-lg">
              Skills you’ll master at DMAO
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.learn.map((item, index) => (
              <div
                key={index}
               className="group p-8 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-[#F5B301]/10 hover:border-[#F5B301]/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F5B301]/20 flex items-center justify-center text-[#F5B301] mb-6 group-hover:scale-110 transition duration-500">
                  <Check size={28} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-28 bg-[#02050D]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-5">
              Facilities We Provide
            </h2>

            <p className="text-gray-300 text-lg">
              Everything you need for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.facilities.map((item, index) => (
              <div
                key={index}
               className="group p-8 rounded-[30px] bg-white/5 border border-white/10 hover:bg-[#F5B301]/10 hover:border-[#F5B301]/30 transition-all duration-500 hover:-translate-y-2"
              >
               <div className="w-16 h-16 rounded-2xl bg-[#F5B301]/20 flex items-center justify-center text-[#F5B301] mb-6 group-hover:rotate-12 transition duration-500">
                  <Sparkles size={28} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 relative">
      <div className="absolute bottom-10 right-10 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-5">
              Course Packages
            </h2>

            <p className="text-gray-300 text-lg">
              Choose your perfect plan
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Basic",
                price: "₹9,999",
              },

              {
                title: "Advanced",
                price: "₹19,999",
              },

              {
                title: "Premium",
                price: "₹29,999",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative p-10 rounded-[35px] border backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 ${
                  index === 1
                    ?  "bg-[#F5B301]/10 border-[#F5B301]/40"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-[#F5B301] text-black text-sm font-bold">
                    Popular
                  </div>
                )}

                <div className="w-16 h-16 rounded-2xl bg-[#F5B301]/20 flex items-center justify-center text-[#F5B301] mb-8">
                  <Star size={28} />
                </div>

                <h3 className="text-3xl font-black mb-4">
                  {plan.title}
                </h3>

               <h4 className="text-5xl font-black text-[#F5B301] mb-8">
                  {plan.price}
                </h4>

                <ul className="space-y-4 text-gray-300 mb-10">
                  <li>✔ Live Classes</li>
                  <li>✔ Practical Projects</li>
                  <li>✔ Certificate</li>
                  <li>✔ Career Support</li>
                </ul>

              <button className="w-full h-14 rounded-2xl bg-linear-to-r from-[#F5B301] to-[#0A2A66] hover:scale-105 transition duration-500 font-bold text-black">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
<section className="py-28 bg-linear-to-b from-[#02050D] via-[#061224] to-[#02050D]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}
              <div className="p-10 md:p-14 bg-linear-to-br from-[#061224] via-[#0A2A66] to-[#02050D]">
                <p className="uppercase tracking-[6px] text-[#F5B301] mb-5">
                  Free Demo
                </p>

                <h2 className="text-5xl font-black mb-6">
                  Start Your
                  <span className="block text-[#F5B301]">
                    Journey
                  </span>
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  Join DMIO and build real-world marketing skills with practical learning.
                </p>
              </div>

              {/* RIGHT */}
              <div className="p-10 md:p-14">
                <form  onSubmit={handleSubmit} className="space-y-6">
                <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-[#F5B301]"
  required
/>

                 <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email"
  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-[#F5B301]"
  required
/>

                 <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Mobile Number"
  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-[#F5B301]"
  required
/>

                 <input
  type="text"
  name="course"
  value={course.title}
  readOnly
  className="w-full h-14 rounded-2xl bg-[#F5B301]/10 border border-[#F5B301]/30 px-5 outline-none text-white"
/>

                <button
  type="submit"
  disabled={loading}
  className="w-full h-14 rounded-2xl bg-linear-to-r from-[#F5B301] to-[#0A2A66] hover:scale-[1.02] transition duration-500 font-bold text-lg text-black disabled:opacity-50"
>
  {loading ? "Submitting..." : "Submit Now"}
</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoursePage;