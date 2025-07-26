import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import myPhoto from '../assets/Flip.png';

export default function Hero() {
  const x = useMotionValue(0); // motion for image X position
  const lastScroll = useRef(0);

  useEffect(() => {
  const handleScroll = () => {
    const current = window.scrollY;

    if (current > lastScroll.current) {
      // scroll down → move right
      animate(x, 500, { type: "spring", stiffness: 50,  });
    } else {
      // scroll up → move left
      animate(x, -300, { type: "spring", stiffness: 50,  });
    }

    // snap back to center
    setTimeout(() => {
      animate(x, 0, { type: "spring", stiffness: 60,});
    }, 200); // slight delay before returning to center
    lastScroll.current = current;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section
      className="min-h-fit flex flex-col gap-8 md:flex-row items-center md:justify-between px-4 sm:px-6 pt-28 md:pt-36 pb-10 bg-[#070D1B] text-white mx-auto max-w-7xl"
      data-aos="fade-right"
    >
      {/* Left Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-500">
          Hi, I'm Naveen
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
          A Passionate Frontend Developer
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
        >
          Hire Me
        </a>
      </div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
        style={{ x }}
      >
        <img
          src={myPhoto}
          alt="Naveen"
          className="w-52 h-52 sm:w-64 sm:h-96 object-cover rounded-full border-4 border-blue-500 shadow-lg"
        />
      </motion.div>
    </section>
  );
}