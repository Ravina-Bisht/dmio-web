import { Link } from "react-router-dom";
import { Target, Briefcase, TrendingUp, Globe } from "lucide-react";

function AboutPage() {
  return (
    <div className="bg-[#02050D] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-[#02050D] via-[#061224] to-[#02050D]">
        {/* GLOW EFFECTS */}
        <div className="absolute top-20 left-20 w-125 h-125 bg-[#0A2A66]/30 blur-[180px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full animate-pulse"></div>

        

         {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      {/* MOVING LIGHT */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_10s_linear_infinite]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center"></div>






        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[8px] text-[#F5B301] mb-6">
            About DMIO
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Empowering The Next
            <span className="block text-[#F5B301]">
              Generation Of Digital Marketers
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            DMIO (Digital Marketing Institute Online) is dedicated to helping
            students, professionals, creators, and entrepreneurs master
            practical digital marketing skills and build successful careers in
            the digital world.
          </p>
        </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute left-0 top-20 w-125 h-125 bg-[#0A2A66]/20 blur-[180px] rounded-full"></div>

         {/* MOVING LIGHT */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_10s_linear_infinite]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -inset-2 bg-linear-to-r from-[#F5B301] to-[#0A2A66] rounded-[35px] blur opacity-60 animate-pulse"></div>

              <div className="relative overflow-hidden rounded-[35px] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Digital Marketing"
                  className="w-full h-150 object-cover hover:scale-110 transition duration-700"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="uppercase tracking-[6px] text-[#F5B301] mb-5">
                Who We Are
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-8">
                Learn Digital Marketing
                <span className="block text-[#F5B301]">
                  The Practical Way
                </span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Digital marketing has become one of the most valuable skills in
                today's world. Every business, startup, creator, and brand needs
                a strong online presence to grow. At DMIO, we focus on practical
                learning that helps students understand real-world digital
                marketing strategies including SEO, Social Media Marketing,
                Performance Marketing, AI Marketing, Content Creation, and
                Branding.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                Founded by <span className="text-[#F5B301] font-semibold">Mr. Mrinal Mehta</span>,
                DMIO was created with a vision to bridge the gap between
                theoretical education and industry requirements. Through live
                projects, expert mentorship, and hands-on learning, our mission
                is to prepare students for real career opportunities in the
                digital economy.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative py-32 bg-linear-to-b from-[#061224] to-[#02050D] overflow-hidden">
        <div className="absolute top-10 right-10 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>


         {/* MOVING LIGHT */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_10s_linear_infinite]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[6px] text-[#F5B301] mb-5">
              Benefits
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why Learn
              <span className="text-[#F5B301]">
                {" "}Digital Marketing?
              </span>
            </h2>

            <p className="text-gray-300 text-lg">
              Digital marketing opens doors to countless opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase size={32} />,
                title: "High Demand Careers",
                desc: "Businesses actively hire digital marketing professionals worldwide.",
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Freelancing Opportunities",
                desc: "Work with clients globally and build multiple income streams.",
              },
              {
                icon: <Globe size={32} />,
                title: "Global Reach",
                desc: "Learn skills that are valuable across industries and countries.",
              },
              {
                icon: <Target size={32} />,
                title: "Business Growth",
                desc: "Promote products, services, and personal brands effectively.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-[#F5B301]/10 hover:border-[#F5B301]/30 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="w-18 h-18 rounded-3xl bg-[#F5B301]/20 text-[#F5B301] flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* POINTERS */}
          <div className="mt-20 rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">
            <h3 className="text-3xl font-black mb-8 text-[#F5B301]">
              What You Can Achieve
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Start a high-paying career in digital marketing",
                "Become a freelancer and work from anywhere",
                "Build and grow your own business",
                "Learn AI-powered marketing strategies",
                "Manage social media professionally",
                "Run successful Google & Meta ad campaigns",
                "Generate passive income opportunities",
                "Work with brands and international clients",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5B301]/5 border border-[#F5B301]/10"
                >
                  <div className="w-3 h-3 rounded-full bg-[#F5B301]"></div>

                  <p className="text-gray-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">

       {/* MOVING LIGHT */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_10s_linear_infinite]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center"></div>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-6">
            Ready To Start Your
            <span className="block text-[#F5B301]">
              Digital Marketing Journey?
            </span>
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Join DMIO and gain practical skills that can transform your career.
          </p>

          <Link to="/courses">
            <button className="px-10 h-16 rounded-2xl bg-linear-to-r from-[#F5B301] to-[#0A2A66] text-black font-bold text-lg hover:scale-105 transition duration-500">
              Explore Courses
            </button>
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;