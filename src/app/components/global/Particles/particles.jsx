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
      <div id="particles-js" style={particlesStyle}></div>
      <div class="count-particles">
        <span class="js-count-particles"></span>
        {children}
      </div>
    </>
  );
};

export default Particles;
