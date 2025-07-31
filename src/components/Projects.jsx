import { motion } from "framer-motion";
import greenden from "../assets/Greenden.png";
import apple from "../assets/Apple.png";
import movie from "../assets/Movie App.png";
import nastra from "../assets/Nastra.png";
import weather from "../assets/Weather.png";
import netflix from "../assets/Netflix.png";

const projectData = [
  {
    title: "Netflix Login Clone",
    description: "A responsive Netflix login page replica built with React and Tailwind CSS, featuring clean design, form validation, and smooth navigation routing.",
    image: netflix,
    link: "https://netflix-login-opal.vercel.app/",
  },
  {
    title: "Weather App",
    description: "A responsive weather forecast app built with React and Tailwind CSS, integrating OpenWeatherMap API for real-time weather data and search functionality.",
    image: weather,
    link: "https://weather-app-react-nine-gules.vercel.app/",
  },
  {
    title: "Apple Clone",
    description: "A sleek Apple website clone featuring dark mode, smooth animations, responsive design, and React Router-based navigation.",
    image: apple,
    link: "https://clone-apple-lilac.vercel.app/",
  },
  {
    title: "Nostra",
    description: "A responsive eCommerce website clone with modern design, dark mode, smooth animations, and routing using React and Tailwind CSS.",
    image: nastra,
    link: "https://naveenmanickdev.github.io/Nostra_Tailwind/index.html",
  },
  {
    title: "Greenden",
    description: "A responsive plant eCommerce website built with React and Tailwind CSS, featuring product listings, modern UI, and smooth navigation.",
    image: greenden,
    link: "https://naveenmanickdev.github.io/greenden-tailwind/",
  },
  {
    title: "Movie App ( Use VPN )",
    description: "A responsive movie browsing app with search, filters, pagination, and watchlist features built using React, Tailwind CSS, and API integration.",
    image: movie,
    link: "https://movies-app-wheat-beta.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-16 bg-[#070D1B] text-white"
      data-aos="fade-up"
    >
      {/* Background Faded Text */}
      <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-[80px] sm:text-[80px] font-extrabold text-white/5 uppercase pointer-events-none select-none">
        PROJECT
      </h2>


      {/* Section Title */}
      <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-12 z-10 relative">
        PROJECT
        <div className="mt-2 h-[2px] w-32 mx-auto bg-gray-500 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
        </div>
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {projectData.map((project, index) => (
          <motion.a
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0A101E] border border-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-yellow-400/40 transition-all duration-300 group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 flex flex-col items-center text-center">
              <h4 className="text-2xl font-semibold mb-2 text-yellow-400">
                {project.title}
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}