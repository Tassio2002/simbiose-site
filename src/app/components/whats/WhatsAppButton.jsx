import React from "react";
import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-5 right-1.5 lg:right-5 hover:bottom-8  transition duration-700 w-10 h-10 flex self-center justify-center content-center transform z-50">
      <a
        href="https://api.whatsapp.com/send?phone=5531984853252&text=Ol%C3%A1,%20gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20tecnologia%20da%20Simbiose/BrTale%E2%80%A6"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full shadow-lg w-full transition transform hover:-translate-y-1"
      >
        <Image
          className="w-8 ml-auto lg:w-full  lg:min-w-10"
          src="/whatsapp.png"
          alt="WhatsApp"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
