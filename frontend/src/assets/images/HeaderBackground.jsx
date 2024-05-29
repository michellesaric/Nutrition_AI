import React, { useState, useEffect } from "react";

const HeaderBackground = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const svgStyle = {
    width: isMobile ? "800px" : "100%",
    height: isMobile ? "191px" : "auto",
    position: isMobile ? "fixed" : "static",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={svgStyle}
      viewBox="0 0 1440 344"
      fill="none"
    >
      <path
        d="M0 0H1440V318.794C866.805 354.355 552.724 350.39 0 318.794V0Z"
        fill="#2A8460"
        fillOpacity="0.1"
      />
    </svg>
  );
};

export default HeaderBackground;
