"use client";
import "./styles/style.css";
import Script from "next/script";
import { useEffect } from "react";

const Particles = ({ children, background, backgroundColor }) => {
  const particlesStyle = {
    background: `url(${background}) no-repeat`,
    backgroundSize: "cover",
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/scripts/particles.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="particles-wrapper">
        <div id="particles-js" style={particlesStyle}></div>
        <div className="count-particles">
          <span className="js-count-particles"></span>
        </div>
      </div>
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" />
      <Script src="/scripts/particles.js" />
    </>
  );
};

export default Particles;
