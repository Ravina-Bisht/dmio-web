import { Megaphone, GraduationCap } from "lucide-react";

function About() {
  return (
    <section className="relative py-32 bg-linear-to-b from-[#030712] via-[#061224] to-[#02050d] overflow-hidden text-white">
      {/* PREMIUM BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-[#0A2A66]/30 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      {/* ANIMATED LIGHT */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_10s_linear_infinite]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT IMAGE */}
        <div className="relative group">
          {/* PREMIUM GLOW BORDER */}
          <div className="absolute -inset-2 bg-linear-to-r from-[#0A2A66] via-[#F5B301] to-[#0A2A66] rounded-[40px] blur opacity-50 group-hover:opacity-80 transition duration-700"></div>

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <img
              src="https://i.pinimg.com/1200x/74/f5/0f/74f50f515887b6ef1d943b6a4f289eff.jpg"
              alt="DMAO"
              className="w-full h-162.5 object-cover transition duration-700 group-hover:scale-110"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-[#02050d] via-black/10 to-transparent"></div>

            {/* FLOATING BADGE */}
            <div className="absolute bottom-6 left-6 bg-[#061224]/80 backdrop-blur-2xl border border-[#F5B301]/20 px-7 py-5 rounded-3xl shadow-2xl shadow-black/40 animate-bounce">
              <h3 className="text-3xl font-black text-[#F5B301]">
                2K+
              </h3>

              <p className="text-gray-300 font-medium">
                Students Trained
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          {/* FLOATING GLOW */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#F5B301]/10 blur-[90px] animate-pulse"></div>

          {/* SMALL FLOATING BALL */}
          <div className="absolute top-32 right-10 w-5 h-5 rounded-full bg-[#F5B301] animate-bounce"></div>

          <p className="uppercase tracking-[8px] text-[#F5B301] mb-5 text-lg font-semibold ">
            About DMIO
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            Empowering The
            <span className="block text-[#F5B301] ">
              Future Of Digital Marketing
            </span>
          </h2>

          {/* PREMIUM LINE */}
          <div className="h-0.75 w-40 bg-linear-to-r from-[#F5B301] to-transparent rounded-full mb-10"></div>

          <p className="text-gray-300 text-lg leading-relaxed mb-12 animate-[fadeUp_1.2s_ease]">
            DMIO is a modern digital marketing institute focused on practical
            learning, industry-ready skills, and real-world strategies. We help
            students master SEO, branding, social media, Web devlopment, content
            creation, and paid advertising through hands-on training and live
            projects.
          </p>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* CARD 1 */}
            <div className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[30px] p-8 hover:bg-[#0A2A66]/40 hover:border-[#F5B301]/30 transition-all duration-700 hover:-translate-y-3 overflow-hidden">
              {/* CARD GLOW */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B301]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-3xl bg-[#0A2A66]/70 border border-[#F5B301]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                  <Megaphone
                    className="text-[#F5B301]"
                    size={30}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Industry-Focused Training
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Learn modern marketing strategies used by real brands and
                  agencies with hands-on practical projects and expert guidance.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[30px] p-8 hover:bg-[#0A2A66]/40 hover:border-[#F5B301]/30 transition-all duration-700 hover:-translate-y-3 overflow-hidden">
              {/* CARD GLOW */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F5B301]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-3xl bg-[#0A2A66]/70 border border-[#F5B301]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                  <GraduationCap
                    className="text-[#F5B301]"
                    size={30}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Career Growth Support
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Get mentorship, portfolio guidance, internship preparation,
                  placement support, and career-focused training to become
                  job-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;