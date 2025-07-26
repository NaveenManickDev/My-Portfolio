import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CursorFollower from "./components/CursorFollower"; 
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // run animation only once
      easing: "ease-in-out", 
    });
  }, []);
  return (
    <BrowserRouter>
      <CursorFollower /> {<CursorFollower />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
