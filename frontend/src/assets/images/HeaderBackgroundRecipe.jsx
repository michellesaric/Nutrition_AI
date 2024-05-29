import { useState, useEffect } from "react";

const HeaderBackgroundRecipe = () => {
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
    position: isMobile ? "absolute" : "static",
    top: "-60px",
  };
  return (
    <svg
      className="header-background-recipe"
      xmlns="http://www.w3.org/2000/svg"
      style={svgStyle}
      viewBox="0 0 1440 127"
      fill="none"
    >
      <path
        d="M0 0H1440V117.694C866.805 130.823 552.724 129.359 0 117.694V0Z"
        fill="#2A8460"
        fillOpacity="0.1"
      />
    </svg>
  );
};

export default HeaderBackgroundRecipe;
