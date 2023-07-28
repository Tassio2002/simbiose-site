"use client";
import "./styles/style.css";
import Script from "next/script";

const ParticlesContact = ({ children }) => {
  return (
    <>
      <div id="tsparticles"></div>
      <Script
        src="https://cdn.jsdelivr.net/npm/tsparticles@1.37.4/tsparticles.min.js"
        async
      />
      <Script src="/scripts/particlesContact.js" async />
    </>
  );
};

export default ParticlesContact;
