import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section  className="relative h-screen overflow-hidden flex items-center justify-center text-white" >
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-2500 ${
              current === index
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}

        {/* DARK OVERLAY */}
        {/* <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-black"></div> */}
        <div className="absolute inset-0 bg-linear-to-r from-[#001F5B]/95 via-black/80 to-black/90"></div>
      </div>


      {/* ANIMATED MESH LAYER */}
<div className="absolute inset-0 overflow-hidden">
  
  {/* FLOATING ORB 1 */}
  <div className="absolute top-20 left-20 w-72 h-72 bg-[#F7B500]/10 rounded-full blur-[120px] animate-pulse"></div>

  {/* FLOATING ORB 2 */}
  <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#001F5B]/30 rounded-full blur-[140px] animate-pulse"></div>

  {/* MOVING LIGHT */}
  <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_8s_linear_infinite]"></div>

  {/* GRID */}
  <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[60px_60px]"></div>

  {/* FLOATING PARTICLES */}
  <div className="absolute top-[20%] left-[10%] w-3 h-3 rounded-full bg-[#F7B500] animate-bounce"></div>

  <div className="absolute top-[60%] left-[80%] w-2 h-2 rounded-full bg-white animate-ping"></div>

  <div className="absolute top-[40%] left-[70%] w-4 h-4 rounded-full bg-[#F7B500]/70 animate-pulse"></div>

  <div className="absolute bottom-[20%] left-[30%] w-3 h-3 rounded-full bg-white/70 animate-bounce"></div>
</div>






      {/* FLOATING GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#001F5B]/30 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F7B500]/20 blur-[120px] rounded-full animate-pulse"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        
        <h1 className="text-xl md:text-7xl   text-[#F7B500] font-black leading-tight mb-8 mt-15 animate-pulse">
          Digital Marketing Institute Online
          </h1>
        <h1 className="text-xl md:text-2xl font-black leading-tight mb-8">
          Become The Future Of  
          <p className="block text-[#FFD54A]">
            Digital Marketing
           </p>
         
        </h1>

        {/* <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
          Learn SEO, Social Media Marketing, AI Marketing, Branding,
          Performance Ads, and Content Strategy with industry experts at DMAO.
        </p> */}

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <Link to="/courses">
         <button className="bg-linear-to-r from-[#F7B500] to-[#ffcc33] hover:from-[#ffcc33] hover:to-[#F7B500] text-[#001F5B] transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-yellow-500/20 hover:scale-105">
  Explore Courses
</button>
          </Link>

          {/* <button className="border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-full font-semibold text-lg">
            Watch Demo
          </button> */}
        </div>
        {/* new thing */}
        <div className="mt-10 flex justify-center">
  <div className="h-0.5 w-40 bg-linear-to-r from-transparent via-[#F7B500] to-transparent"></div>
</div>

        {/* GLASS STATS */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="bg-white/5 border border-[#F7B500]/20 backdrop-blur-2xl px-8 py-5 rounded-3xl">
            <h2 className="text-3xl font-bold text-[#F7B500]">2K+</h2>
            <p className="text-gray-300">Students</p>
          </div>

          <div className="bg-white/5 border border-[#F7B500]/20 backdrop-blur-2xl px-8 py-5 rounded-3xl">
            <h2 className="text-3xl font-bold text-[#F7B500]">100%</h2>
            <p className="text-gray-300">Practical</p>
          </div>

          <div className="bg-white/5 border border-[#F7B500]/20 backdrop-blur-2xl px-8 py-5 rounded-3xl">
            <h2 className="text-3xl font-bold text-[#F7B500]">24/7</h2>
            <p className="text-gray-300">Mentorship</p>
          </div>
        </div>
      </div>

      {/* SCROLL ICON */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-[#B57EDC] rounded-full flex justify-center">
          <div className="w-2 h-2 bg-[#B57EDC] rounded-full mt-2 animate-ping"></div>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;