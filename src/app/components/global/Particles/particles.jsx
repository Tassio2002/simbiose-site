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
        <div class="count-particles">
          <span class="js-count-particles"></span>
        </div>
      </div>

      <Script
        src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        async
      />
      <Script src="http://threejs.org/examples/js/libs/stats.min.js" async />
      <Script src="/scripts/particles.js" async />
    </>
  );
};

export default Particles;