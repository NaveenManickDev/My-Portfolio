import { BookOpen, Briefcase } from "lucide-react";

const educationList = [
  {
    title: "Bachelor of Computer Science",
    duration: "2010 - 2014",
    place: "Nandha College of Arts and Science",
    desc: "Learned the basics of computer science, programming, and web development. Built a strong foundation in logic, problem-solving, and UI design.",
  },
  {
    title: "Frontend Development with React",
    duration: "2025",
    place: "EMC",
    desc: "Covered components, props, state, routing in React. Built responsive projects using modern tools like Vite and Tailwind CSS.",
  },
  {
    title: "Prompt Engineering for AI",
    duration: "2025",
    place: "EMC",
    desc: "Learned how to write effective prompts for AI tools like ChatGPT. Explored use cases for productivity and creative problem solving.",
  },
];

const experienceList = [
  {
    title: "Frontend Developer (Fresher)",
    duration: "Present",
    place: "Open to Work / Freelance Projects",
    desc: "Building responsive websites with HTML, CSS, JavaScript, and React. Improving UI/UX and open to freelance or entry-level opportunities.",
  },
  {
    title: "Personal Projects",
    duration: "May 2025 - Present",
    place: "Self-initiated React Projects",
    desc: "Created projects like Weather App, Task Manager, and Portfolio using React, Tailwind CSS, and Vite. Focused on clean UI and interactivity.",
  },
  {
    title: "Intern - Web Design",
    duration: "Jun 2023 - Present",
    place: "SnapCode Tech",
    desc: "Assisted in building UI from mockups. Worked with React, JavaScript, and CSS to develop responsive web pages for client websites.",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="max-w-7xl mx-auto px-6 py-16 bg-[#070D1B] text-white"
      data-aos="fade-up"
    >
      {/* Background Text */}
      <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-[80px] font-extrabold text-white/5 uppercase pointer-events-none select-none">
        RESUME
      </h2>

      {/* Section Title */}
      <h3 className="text-3xl font-bold text-yellow-400 text-center mb-12 relative z-10">
        RESUME
        <div className="mt-2 h-[2px] w-32 mx-auto bg-gray-500 relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
        </div>
      </h3>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Education Section */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-blue-500" size={28} />
            <h4 className="text-2xl font-semibold">Education</h4>
          </div>
          <div className="space-y-6">
            {educationList.map((edu, idx) => (
              <div key={idx}>
                <h5 className="text-2xl font-semibold text-yellow-300">{edu.title}</h5>
                <p className="text-lg text-gray-400">
                  {edu.duration}
                </p>
                <p className="text-lg py-2"> {edu.place}</p>
                <p className="mt-2 text-lg text-gray-400 leading-relaxed">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-blue-500" size={28} />
            <h4 className="text-2xl font-semibold">Experience</h4>
          </div>
          <div className="space-y-6">
            {experienceList.map((exp, idx) => (
              <div key={idx}>
                <h5 className="text-2xl font-semibold text-yellow-300">{exp.title}</h5>
                <p className="text-lg text-gray-400">
                  {exp.duration}
                </p>
                <p className="text-lg py-2">{exp.place}</p>
                <p className="mt-2 text-lg text-gray-400 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}