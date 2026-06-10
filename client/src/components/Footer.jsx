// import {
//   Mail,
//   Phone,
//   MapPin,
//   ArrowUp,
//   Globe,
//   CircleUserRound,
//   Play,
//   Briefcase,
// } from "lucide-react";

// function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="bg-black text-white pt-24 pb-10 relative overflow-hidden">
//       {/* GLOW */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-[#B57EDC]/10 blur-[150px] rounded-full"></div>

//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         {/* GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
//           {/* ABOUT */}
//           <div>
//             <h2 className="text-4xl font-black mb-5">
//               <span className="text-[#B57EDC]">DM</span>AO
//             </h2>

//             <p className="text-gray-300 leading-relaxed mb-6">
//               DMAO is a modern digital marketing institute focused on practical
//               skills, career growth, and real-world marketing strategies.
//             </p>

//             {/* SOCIAL */}
//             <div className="flex gap-4">
//               {[Globe, CircleUserRound, Play, Briefcase].map(
//                 (Icon, index) => (
//                   <div
//                     key={index}
//                     className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B57EDC] hover:bg-[#B57EDC] hover:text-white transition duration-500 cursor-pointer"
//                   >
//                     <Icon size={20} />
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* LINKS */}
//           <div>
//             <h3 className="text-2xl font-bold mb-6">
//               Quick Links
//             </h3>

//             <ul className="space-y-4 text-gray-300">
//               {[
//                 "Home",
//                 "About",
//                 "Courses",
//                 "FAQ",
//                 "Contact",
//               ].map((item, index) => (
//                 <li
//                   key={index}
//                   className="hover:text-[#B57EDC] transition cursor-pointer"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* BRANCHES */}
//           <div>
//             <h3 className="text-2xl font-bold mb-6">
//               Our Branches
//             </h3>

//             <ul className="space-y-4 text-gray-300">
//               <li>New Delhi </li>
//               <li>Australia</li>
//               <li>United kingdom</li>

//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h3 className="text-2xl font-bold mb-6">
//               Get In Touch
//             </h3>

//             <div className="space-y-5 text-gray-300">
//               <div className="flex items-center gap-4">
//                 <Mail className="text-[#B57EDC]" size={20} />
//                 <p>team@digitalmarketinginstitue.online</p>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Phone className="text-[#B57EDC]" size={20} />
//                 <p>+91 96505 67689</p>
//               </div>

//               <div className="flex items-center gap-4">
//                 <MapPin className="text-[#B57EDC]" size={50} />
//                 <p>A-13 Extension DK Road, Mohan Garden, Block B Mahavir Enclave, Nawada, New Delhi 110059</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* COPYRIGHT */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8">
//           <p className="text-gray-400 text-center">
//             © 2026 DMIO — All Rights Reserved.
//           </p>

//           <button
//             onClick={scrollToTop}
//             className="w-14 h-14 rounded-2xl bg-[#B57EDC] hover:bg-purple-600 transition flex items-center justify-center animate-bounce"
//           >
//             <ArrowUp size={22} />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-[#02050d] via-[#061224] to-black text-white overflow-hidden border-t border-white/10">
      {/* PREMIUM GLOW */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-[#0A2A66]/30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      {/* MOVING LIGHT */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_10s_linear_infinite]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* LOGO + INFO */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img
                src={logo}
                alt="DMAO Logo"
                className="w-16 h-16 rounded-2xl object-cover border border-[#F5B301]/20"
              />

              <div>
                <h2 className="text-3xl font-black">
                  DMIO
                </h2>

                <p className="text-sm text-[#F5B301] tracking-[3px] uppercase">
                  Digital Marketing
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              DMIO is a modern digital marketing institute helping
              students, creators, entrepreneurs, and professionals
              build successful careers through practical,
              industry-focused training programs.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A2A66]/50 hover:border-[#F5B301]/30 hover:text-[#F5B301] transition-all duration-500"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A2A66]/50 hover:border-[#F5B301]/30 hover:text-[#F5B301] transition-all duration-500"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A2A66]/50 hover:border-[#F5B301]/30 hover:text-[#F5B301] transition-all duration-500"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A2A66]/50 hover:border-[#F5B301]/30 hover:text-[#F5B301] transition-all duration-500"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#F5B301]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-5">
              <Link
                to="/"
                className="text-gray-300 hover:text-[#F5B301] transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-300 hover:text-[#F5B301] transition duration-300"
              >
                About Us
              </Link>

              <Link
                to="/courses"
                className="text-gray-300 hover:text-[#F5B301] transition duration-300"
              >
                Courses
              </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-[#F5B301] transition duration-300"
              >
                Contact
              </Link>

              <Link
                to="/faq"
                className="text-gray-300 hover:text-[#F5B301] transition duration-300"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#F5B301]">
              Contact Us
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2A66]/50 border border-[#F5B301]/10 flex items-center justify-center text-[#F5B301]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>

                  <h4 className="font-semibold">
                    +91 98765 43210
                  </h4>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2A66]/50 border border-[#F5B301]/10 flex items-center justify-center text-[#F5B301]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <h4 className="font-semibold break-all">
                  team@digitalmarketinginstitute.online
                  </h4>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2A66]/50 border border-[#F5B301]/10 flex items-center justify-center text-[#F5B301]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <h4 className="font-semibold">
                    New Delhi, India
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BRANCHES */}
        <div className="mt-24">
          <h3 className="text-3xl font-black text-center text-[#F5B301] mb-10">
            Our Branches
          </h3>

          <div className="flex flex-wrap justify-center gap-5">
            {[
              "Delhi",
              "Australia",
              "United Kingdom",
            ].map((branch, index) => (
              <button
                key={index}
                className="px-8 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-[#0A2A66]/50 hover:border-[#F5B301]/30 hover:text-[#F5B301] transition-all duration-500 font-semibold"
              >
                {branch}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative z-10 border-t border-white/10 py-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2026 DMIO - Digital Marketing Institute Online.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;