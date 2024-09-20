import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverNav, setHoverNav] = useState(false);

  useEffect(() => {
    const handlePosition = (e) => {
      setMousePosition({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
      if (e.target.tagName === "A" || e.target.tagName === "H2" || e.target.tagName === "SPAN") {
        setHoverNav(true);
      } else {
        setHoverNav(false);
      }
    };

    window.addEventListener("mousemove", handlePosition);
    
    return () => window.removeEventListener("mousemove", handlePosition);
  }, []);

  return { ...mousePosition, hoverNav };
};
