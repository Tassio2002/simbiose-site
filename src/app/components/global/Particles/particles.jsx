"use client";
import "./styles/style.css";
import Script from "next/script";

const Particles = ({ children, background, backgroundColor }) => {
  const particlesStyle = {
    background: `url(${background}) no-repeat`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="particles-wrapper">
        <div id="particles-js" style={particlesStyle}></div>
        <div className="count-particles">
          <span className="js-count-particles"></span>
        </div>
      </div>
    </>
  );
};

export default Particles;
