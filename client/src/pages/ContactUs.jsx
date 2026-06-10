import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import { useState } from "react";
import axios from "axios";



function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
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

    const res = await axios.post(
      "https://dmio-backend.onrender.com/api/leads",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: "Contact Form",
        message: formData.message,
      }
    );

    if (res.data.success) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="bg-[#02050d] text-white overflow-hidden">
      {/* HERO + CONTACT FORM */}
      <section className="relative py-32 overflow-hidden">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute top-0 left-0 w-125 h-125 bg-[#0A2A66]/30 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <img
                  src={logo}
                  alt="DMIO Logo"
                  className="w-24 h-24 rounded-3xl object-cover border border-white/10"
                />

                <div>
                  <h1 className="text-5xl font-black">
                    DMIO
                  </h1>

                  <p className="text-[#F5B301] tracking-[4px] uppercase">
                    Digital Marketing Institute Online
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                DMIO is a leading digital marketing institute dedicated to
                helping students, entrepreneurs, freelancers, and professionals
                master industry-ready digital skills. Our practical training,
                live projects, expert mentorship, and AI-powered marketing
                strategies prepare you for real-world success.
              </p>

              <div className="space-y-8">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#F5B301]/30 transition duration-500">
                  <p className="text-[#F5B301] font-bold mb-2">
                    Email
                  </p>

                 <a
  href="mailto:team@digitalmarketinginstitue.online"
  className="text-xl font-semibold hover:text-[#F5B301]"
>
  team@digitalmarketinginstitue.online
</a>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#F5B301]/30 transition duration-500">
                  <p className="text-[#F5B301] font-bold mb-2">
                    Phone
                  </p>

                 <a
  href="tel:+919876543210"
  className="text-xl font-semibold hover:text-[#F5B301]"
>
  +91 98765 43210
</a>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#F5B301]/30 transition duration-500">
                  <p className="text-[#F5B301] font-bold mb-2">
                    Address
                  </p>

                  <h3 className="text-xl font-semibold">
                    New Delhi, India
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="relative">
              <div className="absolute -inset-2 bg-linear-to-r from-[#F5B301] to-[#0A2A66] rounded-[40px] blur opacity-40"></div>

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 md:p-14">
                <p className="uppercase tracking-[6px] text-[#F5B301] mb-4">
                  Contact Form
                </p>

                <h2 className="text-4xl md:text-5xl font-black mb-8">
                  Send Us A Message
                </h2>

                <form  onSubmit={handleSubmit} className="space-y-6">
                 <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="w-full h-14 rounded-2xl bg-black/30 border border-white/10 px-5 outline-none focus:border-[#F5B301]"
/>

               <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email"
  className="w-full h-14 rounded-2xl bg-black/30 border border-white/10 px-5 outline-none focus:border-[#F5B301]"
/>

                <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Mobile Number"
  className="w-full h-14 rounded-2xl bg-black/30 border border-white/10 px-5 outline-none focus:border-[#F5B301]"
/>

                 <textarea
  rows="5"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Your Message"
  className="w-full rounded-2xl bg-black/30 border border-white/10 px-5 py-4 outline-none resize-none focus:border-[#F5B301]"
></textarea>

                  <button
  type="submit"
  disabled={loading}
  className="w-full h-14 rounded-2xl bg-linear-to-r from-[#F5B301] to-[#0A2A66] font-bold text-lg hover:scale-[1.02] transition duration-500"
>
  {loading ? "Sending..." : "Send Message"}
</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-28 bg-[#030914]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-[#F5B301] mb-4">
              Visit Us
            </p>

            <h2 className="text-5xl font-black">
              Our Location
            </h2>
          </div>

          <div className="overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
            <iframe
              title="DMIO Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112070.06783853698!2d76.89963511640627!3d28.62407850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d058f25836299%3A0xfa2f77b3d5e9fa9c!2sDMIO-%20%231%20Digital%20Marketing%20Institute%20in%20Dwarka%20Mor%2C%20Delhi%20%7C%20PPC%20Course%20%7C%20SEO%20Classes%20%7C%20Social%20Media%20Ads!5e0!3m2!1sen!2sin!4v1780482288205!5m2!1sen!2sin" 
              className="w-full h-125"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>









      {/* WHATSAPP SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute left-0 top-0 w-125 h-125 bg-[#0A2A66]/20 blur-[180px] rounded-full"></div>

        <div className="absolute right-0 bottom-0 w-125 h-125 bg-[#F5B301]/10 blur-[180px] rounded-full"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-[#F5B301] mb-5">
            We Are Here To Help
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-8">
            We'd Love To
            <span className="block text-[#F5B301]">
              Hear From You
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Have questions about our courses, career opportunities, or digital
            marketing training? Connect with our team instantly on WhatsApp.
          </p>

          <a
            href="https://wa.me/9650567689"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 h-16 rounded-full bg-green-600 hover:bg-green-500 transition duration-500 text-xl font-bold"
          >
            <FaWhatsapp size={30} />
            Chat With Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;