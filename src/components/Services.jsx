import {
  PenTool,
  LayoutDashboard,
  Package,
  Smartphone,
  Film,
  MonitorSmartphone,
} from "lucide-react";

const services = [
   {
    icon: <LayoutDashboard className="w-10 h-10 text-blue-400" />,
    title: "UI/UX Design",
    desc: "Designing clean and user-friendly interfaces for websites and web apps.",
  },
  {
    icon: <MonitorSmartphone className="w-10 h-10 text-blue-400" />,
    title: "Responsive Design",
    desc: "Building layouts that work perfectly on desktops, tablets, and mobile devices.",
  },
  {
    icon: <Package className="w-10 h-10 text-blue-400" />,
    title: "Frontend Development",
    desc: "Developing modern websites using HTML, CSS, JavaScript, and React.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blue-400" />,
    title: "Mobile-Friendly UI",
    desc: "Creating mobile-optimized user interfaces for a smooth experience.",
  },
  {
    icon: <Film className="w-10 h-10 text-blue-400" />,
    title: "Basic Animations",
    desc: "Adding simple transitions and animations to enhance user experience.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-blue-400" />,
    title: "Design to Code",
    desc: "Converting Figma, XD, or Photoshop designs into fully functional websites.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-6 py-16 bg-[#070D1B] text-white"
      data-aos="flip-left"
    >
       {/* Background Faded Text */}
      <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-[80px] sm:text-[80px] font-extrabold text-white/5 uppercase pointer-events-none select-none">
         SERVICES
      </h2>

     
      {/* Section Title */}
      <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-12 z-10 relative">
        SERVICES
        <div className="mt-2 h-[2px] w-32 mx-auto bg-gray-500 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
        </div>
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-[#0A101E] rounded-2xl p-6 shadow-md transition-transform hover:scale-105 hover:bg-[#101727] duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              {service.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}