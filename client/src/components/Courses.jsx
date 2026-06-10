import {
  Search,
  BarChart3,
  Megaphone,
  BrainCircuit,
} from "lucide-react";

import { Link } from "react-router-dom";

const courses = [
  {
    title: "SEO Marketing",
    link: "/course/seo",

    icon: <Search size={30} />,

    image:
      "https://i.pinimg.com/736x/90/30/fb/9030fb7176eaeebfbe6c54b15f0d1bbf.jpg",

    desc: "Master search engine optimization, keyword research, backlinks, and Google ranking strategies.",
  },

  {
    title: "Social Media Marketing",
    link: "/course/social",

    icon: <Megaphone size={30} />,

    image:
      "https://i.pinimg.com/736x/c1/aa/e5/c1aae5dd211cce1d6921d9acce4d349e.jpg",

    desc: "Learn Instagram, Facebook, YouTube, and TikTok marketing with real growth strategies.",
  },

  {
    title: "Performance Marketing",
    link: "/course/performance",

    icon: <BarChart3 size={30} />,

    image:
      "https://i.pinimg.com/1200x/85/6b/28/856b2882c67788508a9baaccdfb55d84.jpg",

    desc: "Run high-converting ads using Meta Ads, Google Ads, analytics, and campaign optimization.",
  },

  {
    title: "Website Development",
    link: "/course/ai",

    icon: <BrainCircuit size={30} />,

    image:
      "https://i.pinimg.com/736x/a2/30/bc/a230bc2f3b54507bcd95728b7d4b72e1.jpg",

    desc: "Use AI tools for content creation, automation, branding, and advanced digital campaigns.",
  },
];

function Courses() {
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
          {/* TAG */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#F5B301]/20 bg-[#0A2A66]/40 backdrop-blur-2xl mb-8">
            <span className="w-3 h-3 rounded-full bg-[#F5B301] animate-ping"></span>

            <p className="uppercase tracking-[4px] text-sm text-[#F5B301] font-semibold">
              Our Courses
            </p>
          </div>

          {/* HEADING */}
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Master The Skills Of
            <span className="block text-[#F5B301] animate-pulse">
              Modern Marketing
            </span>
          </h2>

          {/* LINE */}
          <div className="h-0.75 w-48 rounded-full bg-linear-to-r from-[#F5B301] to-transparent mx-auto mb-10"></div>

          {/* TEXT */}
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed animate-[fadeUp_1.2s_ease]">
            Explore industry-focused courses designed to help students become
            professional digital marketers with practical experience and
            real-world strategies.
          </p>
        </div>

        {/* COURSE CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] overflow-hidden hover:-translate-y-4 transition-all duration-700 hover:border-[#F5B301]/30"
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F5B301]/10 blur-[90px] rounded-full"></div>
              </div>

              {/* IMAGE */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-[#02050d] via-black/20 to-transparent"></div>

                {/* ICON */}
                <div className="absolute top-5 left-5 w-16 h-16 rounded-3xl bg-[#061224]/80 backdrop-blur-2xl border border-[#F5B301]/20 flex items-center justify-center text-[#F5B301] group-hover:scale-110 transition duration-500 shadow-2xl shadow-black/40">
                  {course.icon}
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-8">
                <h3 className="text-3xl font-black mb-5 group-hover:text-[#F5B301] transition duration-500">
                  {course.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  {course.desc}
                </p>

                {/* BUTTON */}
                <Link to={course.link}>
                  <button className="w-full py-4 rounded-2xl bg-[#061224] border border-[#F5B301]/20 hover:bg-[#F5B301] hover:text-[#061224] transition-all duration-500 font-bold shadow-xl shadow-black/30">
                    Learn More
                  </button>
                </Link>
              </div>

              {/* PREMIUM BORDER LIGHT */}
              <div className="absolute inset-0 rounded-[35px] border border-transparent group-hover:border-[#F5B301]/20 transition duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;