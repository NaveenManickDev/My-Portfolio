import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Resume from "../components/Resume";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="bg-[#070D1B] text-gray-900  scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
