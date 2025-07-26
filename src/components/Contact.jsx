import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Github,
} from "lucide-react";

const socialLinks = [
  { icon: <Linkedin size={18} />, label: "LinkedIn", url: "https://linkedin.com" },
  { icon: <Facebook size={18} />, label: "Facebook", url: "https://facebook.com" },
  { icon: <Github size={18} />, label: "GitHub", url: "https://github.com" },
  { icon: <Mail size={18} />, label: "Email", url: "mailto:yourname@example.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-12 bg-[#070D1B] text-white" data-aos="fade-down">
      <div className="max-w-6xl mx-auto">
         {/* Background Faded Text */}
      <h2 className="absolute top-5 left-1/2 -translate-x-1/2 text-[80px] sm:text-[80px] font-extrabold text-white/5 uppercase pointer-events-none select-none">
         CONTACT
      </h2>

     
      {/* Section Title */}
      <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-12 z-10 relative">
        CONTACT
        <div className="mt-2 h-[2px] w-32 mx-auto bg-gray-500 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
        </div>
      </h3>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl font-semibold mb-4">Just say Hello</h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-600 rounded-md bg-[#0A101E] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-600 rounded-md bg-[#0A101E] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full p-3 border border-gray-600 rounded-md bg-[#0A101E] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-600 rounded-md bg-[#0A101E] h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2 text-gray-300">
            <h4 className="text-2xl font-semibold mb-4 text-white">Contact Info</h4>
            <p className="mb-6 leading-relaxed text-sm sm:text-base">
              Feel free to reach out to me anytime. I’m available for freelance work and collaboration.
            </p>

            <div className="space-y-6 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <Mail className="text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p>naveenbreaker93@gmail.com</p>
                  {/* <p>info@support.com</p> */}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p>+91 90959 41447</p>
                  <p>+91 82483 00709</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-white">Address</p>
                  <p>
                    Chinniyam Palayam(po)<br />
                    Modakkurichi (via), Erode-638104
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <p className="mt-6 mb-2 text-blue-600 font-medium">Visit my social profile and get connected</p>
             <div className="flex gap-4">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center transition-all duration-300"
        >
          <div className="flex items-center border border-gray-600 hover:border-yellow-400 rounded-full transition-all duration-300 pl-3 pr-3 group-hover:pr-5 bg-[#0E121B]">
            {/* Icon Circle */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full">
              {link.icon}
            </div>
            {/* Expanding Text */}
            <span className="ml-2 text-sm text-white opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 overflow-hidden whitespace-nowrap transition-all duration-300">
              {link.label}
            </span>
          </div>
        </a>
      ))}
    </div>
          </div>
        </div>
      </div>
    </section>
  );
}