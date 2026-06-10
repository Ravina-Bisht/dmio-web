import { Link } from "react-router-dom";
import { useState } from "react";

const courses = [
  {
    title: "SEO Marketing",
    slug: "seo",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",

    about:
      "Master search engine optimization, keyword research, backlinks, technical SEO, and ranking strategies to grow websites organically.",

    learn: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "SEO Audit",
      "Google Search Console",
    ],

    career:
      "Build your career as an SEO Expert, SEO Analyst, Website Growth Specialist, or Freelancer.",
  },

  {
    title: "Social Media Marketing",
    slug: "social",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",

    about:
      "Learn how to grow brands through Instagram, Facebook, YouTube, and TikTok using content strategy and audience psychology.",

    learn: [
      "Instagram Growth",
      "Content Planning",
      "Influencer Marketing",
      "Facebook Ads",
      "Brand Building",
    ],

    career:
      "Become a Social Media Manager, Content Strategist, Influencer Manager, or Brand Consultant.",
  },

  {
    title: "Performance Marketing",
    slug: "performance",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",

    about:
      "Learn high-converting paid advertising using Google Ads, Meta Ads, analytics, and conversion optimization.",

    learn: [
      "Google Ads",
      "Meta Ads",
      "Retargeting",
      "Conversion Tracking",
      "Analytics",
    ],

    career:
      "Work as a Performance Marketer, PPC Expert, Media Buyer, or Ads Strategist.",
  },

  {
    title: "AI Marketing",
    slug: "ai",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",

    about:
      "Use AI tools to automate marketing workflows, create content faster, and build modern digital campaigns.",

    learn: [
      "AI Content Creation",
      "Prompt Engineering",
      "Automation",
      "AI Branding",
      "Marketing AI Tools",
    ],

    career:
      "Become an AI Marketing Specialist, AI Content Strategist, or Automation Expert.",
  },
];

function AllCourses() {
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

  const leadData = {
    ...formData,
    course: selectedCourse,
  };

  try {
    setLoading(true);

    const response = await fetch(
      "https://dmio-backend.onrender.com/api/leads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
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
   <div className="bg-[#02050d] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative py-36 text-center overflow-hidden bg-linear-to-b from-[#02050d] via-[#061224] to-[#02050d]">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#F5B301]/20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-112.5 h-112.5 bg-[#0A2A66]/20blur-[160px] rounded-full"></div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[8px] text-[#F5B301] mb-5">
            DMAO Courses
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Explore Our
            <span className="block text-[#F5B301]">
              Professional Courses
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Industry-focused digital marketing programs designed to help you
            build practical skills and a successful career.
          </p>
        </div>
      </section>

      {/* COURSE SECTIONS */}
      {courses.map((course, index) => (
        <section
          key={index}
          className="relative py-28 overflow-hidden"
        >
          {/* GLOW */}
          <div className="absolute top-10 left-10 w-125 h-125 bg-[#0A2A66]/30 blur-[180px] rounded-full"></div>

<div className="absolute bottom-10 right-10 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* IMAGE */}
              <div
                className={`relative ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                {/* GLOW BORDER */}
               <div className="absolute -inset-2 bg-linear-to-r from-[#0A2A66] via-[#F5B301] to-[#0A2A66] rounded-[35px] blur opacity-60 group-hover:opacity-90 transition duration-700"></div>

                <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-137.5 object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>
                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`relative ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                {/* ANIMATED BACKGROUND */}
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#F5B301]/10 blur-[120px] rounded-full animate-pulse"></div>

               <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-linear-to-r from-[#F5B301]/20 to-[#0A2A66]/30 blur-xl animate-bounce"></div>

                <div className="absolute bottom-10 left-20 w-32 h-32 rounded-full bg-[#0A2A66]/20 blur-[70px] animate-pulse"></div>

                <div className="absolute top-1/2 right-0 w-40 h-40 border border-[#F5B301]/20 rounded-full animate-spin [animation-duration:15s]"></div>

                {/* CONTENT WRAPPER */}
                <div className="relative z-10">
                  <p className="uppercase tracking-[6px] text-[#F5B301] mb-5">
                    DMAO Course
                  </p>

                  <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                    {course.title}
                  </h2>

                  <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    {course.about}
                  </p>

                  {/* WHAT YOU LEARN */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold mb-6 text-[#F5B301]">
                      What You Will Learn
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {course.learn.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4hover:bg-[#0A2A66]/30 hover:border-[#F5B301]/20 transition-all duration-500"
                        >
                          <div className="w-3 h-3 rounded-full bg-[#F5B301]"></div>

                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CAREER */}
                  <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 mb-10 hover:bg-[#F5B301]/10 hover:border-[#F5B301]/30 transition-all duration-500">
                    <h3 className="text-2xl font-bold mb-5 text-[#F5B301]">
                      Career Opportunities
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {course.career}
                    </p>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-5">
                    {/* EXPLORE */}
                    <Link to={`/course/${course.slug}`}>
                      <button className="px-8 h-14 rounded-2xl bg-linear-to-r from-[#0A2A66] to-[#133b8a] border border-[#F5B301]/20 hover:scale-105 hover:shadow-[0_0_35px_rgba(245,179,1,0.25)] transition duration-500 font-bold">
                        Explore Course
                      </button>
                    </Link>

                    {/* ENROLL */}
                    <button
                      onClick={() => {
                        setSelectedCourse(course.title);

                        const formSection =
                          document.getElementById(
                            "enroll-form"
                          );

                        if (formSection) {
                          formSection.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                      className="px-8 h-14 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#F5B301]/10 hover:border-[#F5B301]/30 transition duration-500 font-bold"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ENROLL FORM */}
      <section
        id="enroll-form"
        className="relative py-28 bg-[#07010d] overflow-hidden"
      >
        {/* GLOW */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#F5B301]/20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-112.5 h-112.5 bg-[#0A2A66]/20 blur-[160px] rounded-full"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}
              <div className="relative p-10 md:p-14 bg-linear-to-br from-[#061224] via-[#0A2A66] to-[#02050d] overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#F5B301]/20 blur-[120px] rounded-full animate-pulse"></div>

                <div className="relative z-10">
                  <p className="uppercase tracking-[6px] text-[#F5B301] mb-5">
                    Enroll Now
                  </p>

                  <h2 className="text-5xl font-black leading-tight mb-6">
                    Start Your
                    <span className="block text-[#F5B301]">
                      Digital Journey
                    </span>
                  </h2>

                  <p className="text-gray-300 leading-relaxed text-lg mb-10">
                    Join DMAO and learn practical digital marketing with industry
                    experts, live projects, and career-focused training.
                  </p>

                  <div className="space-y-5">
                    {[
                      "Industry Mentors",
                      "Practical Projects",
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

              {/* RIGHT FORM */}
              <div className="p-10 md:p-14 bg-black">
                <h3 className="text-4xl font-black mb-3">
                  Apply For
                  <span className="text-[#F5B301]">
                    {" "}
                    {selectedCourse}
                  </span>
                </h3>

                <p className="text-gray-400 mb-10">
                  Fill the form and our team will contact you shortly.
                </p>

                <form  onSubmit={handleSubmit} className="space-y-6">
                 <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your name"
  className="w-full h-14 rounded-2xl bg-white/3 border border-white/10 px-5 outline-none focus:border-[#F5B301]/60 focus:bg-[#0A2A66]/10 transition-all duration-300"
  required
/>

                <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  className="w-full h-14 rounded-2xl bg-white/3 border border-white/10 px-5 outline-none focus:border-[#F5B301]/60 focus:bg-[#0A2A66]/10 transition-all duration-300"
  required
/>
<input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Enter your mobile number"
  className="w-full h-14 rounded-2xl bg-white/3 border border-white/10 px-5 outline-none focus:border-[#F5B301]/60 focus:bg-[#0A2A66]/10 transition-all duration-300"
  required
/>

                <input
  type="text"
  name="course"
  value={selectedCourse}
  readOnly
  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none"
/>

                 
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
      </section>
    </div>
  );
}

export default AllCourses;