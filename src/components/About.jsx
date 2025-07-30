import myPhoto from '../assets/openart-image_PeyveN2Y_1753408009330_raw - Copy.png';
import { isMobile } from "react-device-detect";
import { toast } from "react-toastify";
export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Naveen-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // ✅ Show success toast after delay (mobile only)
    if (isMobile) {
      setTimeout(() => {
        toast.success("✅ CV downloaded successfully!", {
          style: {
            background: "#0A101E",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "8px",
          },
        });
      }, 500);
    }
  };
  return (
    <section id="about" className="px-6 py-12 bg-[#070D1B] text-white" data-aos="fade-down">
      {/* Background Faded Text */}
      <h2 className="absolute top-5 left-1/2 -translate-x-1/2 text-[80px] sm:text-[80px] font-extrabold text-white/5 uppercase pointer-events-none select-none">
        ABOUT ME
      </h2>


      {/* Section Title */}
      <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-12 z-10 relative">
        ABOUT ME
        <div className="mt-2 h-[2px] w-32 mx-auto bg-gray-500 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-[2px] bg-yellow-400"></div>
        </div>
      </h3>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={myPhoto}
            alt="Naveen"
            className="w-60 h-60 sm:w-72 sm:h-96 object-cover rounded-xl border-4 border-blue-600 shadow-xl"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Hi There! I'm Naveen Kumar</h3>
          <p className="text-lg sm:text-xl text-blue-400 mb-3">Frontend Developer</p>
          <p className="text-gray-300 mb-6 max-w-screen-md leading-relaxed">
            I am a Frontend Developer with a strong focus on creating responsive and interactive user interfaces.
            I combine design and development to build seamless, accessible, and engaging digital experiences that
            attract, inspire, and motivate users to interact meaningfully with applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-gray-300 mb-6 text-sm sm:text-base">
            <p><span className="font-semibold text-white">Birthday:</span> May 04, 1993</p>
            <p><span className="font-semibold text-white">Phone:</span> +91 90959 41447</p>
            <p><span className="font-semibold text-white">Email:</span> naveenbreaker93@gmail.com</p>
            <p><span className="font-semibold text-white">From:</span> Erode, Tamilnadu</p>
            <p><span className="font-semibold text-white">Language:</span> English</p>
            <p><span className="font-semibold text-white">Freelance:</span> Available</p>
          </div>

          {/* Download CV */}
          <div className="flex gap-4">
            {/* View Resume */}
            <a
              href="/Naveen-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-all duration-300"
            >
              View Resume
            </a>

            {/* Download CV */}
            <button
              onClick={handleDownload}
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}