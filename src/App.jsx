import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CursorFollower from "./components/CursorFollower"; 
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // AOS Animation Initialization
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });

    // Check for mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Treat <768px as mobile
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      {!isMobile && <CursorFollower />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
