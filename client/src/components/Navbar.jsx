import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpeg'


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5 text-white">
        {/* LOGO */}
        {/* <h1 className=" font-black tracking-wider">
          <img src="client\src\assets\logo.jpeg"/>
        </h1> */}

        <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="DMIO Logo"
    className="w-14 h-14 object-contain"
  />
  </div>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          <li className="hover:text-[#F8BB00] transition cursor-pointer">
          <Link to='/'>Home</Link>
            
          </li>

          {/* DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <div className="flex items-center gap-2 hover:text-[#F8BB00] transition cursor-pointer">
            <Link to="/courses">
              Courses
             
              </Link>
               <ChevronDown size={18} />
            </div>

            {/* GLASS DROPDOWN */}
            <div
              className={`absolute top-10 left-0 w-64 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
                dropdown
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-4"
              }`}
            >
             <div className="p-2">
  {[
    {
      name: "SEO Marketing",
      link: "/course/seo",
    },

    {
      name: "Social Media Marketing",
      link: "/course/social",
    },

    {
      name: "Performance Marketing",
      link: "/course/performance",
    },

    {
      name: "AI Marketing",
      link: "/course/ai",
    },
  ].map((item, index) => (
    <a
      key={index}
      href={item.link}
      className="block px-5 py-4 rounded-xl hover:bg-white/10 cursor-pointer transition"
    >
      {item.name}
    </a>
  ))}
</div>
            </div>
          </li>
          
          <li className="hover:text-[#F8BB00] transition cursor-pointer">
           <Link to="/about">
            About
           </Link>
            
          </li>
          

          <li className="hover:text-[#F8BB00] transition cursor-pointer">
           <Link to="/contact">
            Contact
            </Link>
          </li>
        </ul>

        {/* BUTTON */}
       
        <button  onClick={() => {
    const formSection =
      document.getElementById("enroll-form");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }} className="bg-[#001E63] hover:bg-[#001447] transition-all duration-300 px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:scale-105" >
          Enroll Now
        </button>
       
      </div>
    </nav>
  );
}

export default Navbar;