import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;

    const handleMouseMove = (e) => {
  const { clientX, clientY } = e;

  const dotSize = 12; // 12px is the size of the dot (w-3 and h-3 = 0.75rem = 12px)
  const offsetX = clientX - dotSize / 2;
  const offsetY = clientY - dotSize / 2;

  dot.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
};

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-3 h-3 bg-yellow-400 rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out"
    />
  );
}