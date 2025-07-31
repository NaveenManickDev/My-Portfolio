import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 75 },
    { name: "JavaScript", percent: 75 },
    { name: "React.js", percent: 85 },
    { name: "Tailwind CSS", percent: 90 },
    { name: "UX Design", percent: 90 },
    { name: "API Integration", percent: 65 },
    { name: "Git & GitHub", percent: 70 },
    { name: "MongoDB", percent: 60 },
  ];

  return (
    <section
      id="skills"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 bg-[#070D1B] text-white overflow-hidden" data-aos="fade-up"
    >
      {/* Background Faded Text */}
      <h2 className="absolute top-12 left-1/2 -translate-x-1/2 text-[80px] sm:text-[80px] font-extrabold text-white/5 uppercase pointer-events-none select-none">
        Skills
      </h2>


      {/* Section Title */}
      <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-12 z-10 relative">
        SKILLS
        <div className="mt-2 h-[2px] w-32 mx-auto bg-gray-500 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
        </div>
      </h3>

      <div className="flex flex-col lg:flex-row gap-10 z-10 relative">
        {/* Left Paragraph */}
        <div className="w-full lg:w-1/2 text-gray-300 flex flex-col items-start">
          <h1 className="text-3xl font-bold text-center mb-6 leading-relaxed">
            Below are the skills I've gained through practical experience in this field.
          </h1>
          <p className="text-lg mb-6 leading-relaxed">
            My skill set is built on hands-on experience
            creating modern, responsive web interfaces
            using React, Vite, and Tailwind CSS.
            I’ve worked on replicating real-world UIs,
            such as a Netflix-inspired design,
            and implemented login and signup flows,
            form validations, and efficient
            localStorage-based data handling.
            I focus on delivering clean, user-friendly frontend solutions.
            <br /><br />
            Additionally, I'm experienced in managing component-based architectures,
            optimizing performance using React hooks and lazy loading,
            and integrating animations with AOS and Framer Motion
            for enhanced user interactions.
            I regularly follow mobile-first and accessibility-first design principles,
            and I’m comfortable working in team projects using Git, GitHub, and tools that help manage and organize tasks clearly.
            My goal is always to create intuitive and scalable UIs
            that solve real-world problems effectively.
          </p>
        </div>

        {/* Right Skill Bars */}
        <div className="w-full lg:w-1/2 space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-200">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false }}
                  className="bg-yellow-400 h-3 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}