import {
  GraduationCap,
  BadgeCheck,
  BookOpen,
  Users,
  Trophy,
  Briefcase,
  Smile,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

function WhyChooseUs() {
  const sectionRef = useRef(null);

  const [startCount, setStartCount] = useState(false);

 // INTERSECTION OBSERVER
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStartCount(false);

        setTimeout(() => {
          setStartCount(true);
        }, 100);
      }
    },
    {
      threshold: 0.3,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

  // COUNTER COMPONENT
  const Counter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
     if (!startCount) {
  setCount(0);
  return;
}

      let start = 0;

      const duration = 2000;

      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);

          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  const features = [
    {
      icon: <GraduationCap size={30} />,
      title: "Expert Industry Instructors",

      desc: "Learn from professionals with real-world marketing experience and modern strategies.",
    },

    {
      icon: <BadgeCheck size={30} />,
      title: "Industry-Recognized Certification",

      desc: "Earn certifications that improve your credibility and career opportunities.",
    },

    {
      icon: <BookOpen size={30} />,
      title: "Blended Learning Approach",

      desc: "Flexible online + offline learning experience designed for modern students.",
    },
  ];

  const stats = [
    {
      icon: <Users size={26} />,
      number: 200,
      suffix: "+",
      text: "Students Trained",
    },

    {
      icon: <Trophy size={26} />,
      number: 50,
      suffix: "+",
      text: "Expert Mentors",
    },

    {
      icon: <Briefcase size={26} />,
      number: 95,
      suffix: "%",
      text: "Placement Assistance",
    },

    {
      icon: <Smile size={26} />,
      number: 4.0,
      suffix: "/5",
      text: "Student Satisfaction",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-linear-to-b from-[#02050d] via-[#061224] to-black overflow-hidden text-white"
    >
      {/* PREMIUM GLOW */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-[#0A2A66]/30 blur-[170px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      {/* MOVING LIGHT */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_10s_linear_infinite]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT CONTENT */}
          <div className="relative">
            <div className="absolute -top-10 left-0 w-40 h-40 rounded-full bg-[#F5B301]/10 blur-[90px] animate-pulse"></div>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#F5B301]/20 bg-[#0A2A66]/40 backdrop-blur-2xl mb-8">
              <span className="w-3 h-3 rounded-full bg-[#F5B301] animate-ping"></span>

              <p className="uppercase tracking-[4px] text-sm text-[#F5B301] font-semibold">
                Why Choose DMAO?
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Your Success Is
              <span className="block text-[#F5B301] animate-pulse">
                Our Mission
              </span>
            </h2>

            <div className="h-0.75 w-44 rounded-full bg-linear-to-r from-[#F5B301] to-transparent mb-10"></div>

            <p className="text-gray-300 text-lg leading-relaxed mb-14 animate-[fadeUp_1.2s_ease]">
              DMAO delivers comprehensive, industry-focused digital marketing
              training with practical implementation, helping students build
              real-world skills for the modern digital economy.
            </p>

            {/* FEATURES */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative flex gap-6 p-7 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-2xl hover:bg-[#0A2A66]/40 hover:border-[#F5B301]/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                >                                        
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B301]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

                  <div className="relative z-10 min-w-18.75 h-18.75 rounded-3xl bg-[#0A2A66]/80 border border-[#F5B301]/20 flex items-center justify-center text-[#F5B301] shadow-2xl shadow-black/40 group-hover:scale-110 transition duration-500">
                    {feature.icon}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#F5B301] transition duration-500">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-linear-to-r from-[#0A2A66] via-[#F5B301] to-[#0A2A66] rounded-[45px] blur opacity-50 group-hover:opacity-80 transition duration-700"></div>

            <div className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-2xl">
              <img
                src="https://i.pinimg.com/1200x/6f/00/21/6f0021c55d8d81220a757d696ad9d6e4.jpg"
                alt="DMAO Students"
                className="w-full h-187.5 object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#02050d] via-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-4xl p-8 hover:bg-[#0A2A66]/40 hover:border-[#F5B301]/20 transition-all duration-700 hover:-translate-y-3 overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#F5B301]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative z-10">
                <div className="w-18 h-18 rounded-3xl bg-[#0A2A66]/80 border border-[#F5B301]/20 flex items-center justify-center text-[#F5B301] mb-6 group-hover:scale-110 transition duration-500">
                  {item.icon}
                </div>

                <h3 className="text-5xl font-black mb-3 text-[#F5B301]">
                  <Counter
                    end={item.number}
                    suffix={item.suffix}
                  />
                </h3>

                <p className="text-gray-300 text-lg">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;