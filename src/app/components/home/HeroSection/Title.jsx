import "./styles/style.css";
import highlightImage from "../../../../../public/hero-title.svg";
import Image from "next/image";
import MobileObserverContext from "@/app/data/MobileObserverContext";
import { useContext } from 'react';

const HeroTitle = () => {
  const isMobile = useContext(MobileObserverContext);
  return (
    <div className="hero-title">
      <div className="highlight">
        <Image
          src={highlightImage}
          width={isMobile ? 200 : 352}
          height={isMobile ? 30 : 64}
          alt="highlight text"
        />
        <span>o futuro do seu</span>
      </div>
      <div className="phrase">
        <p>negócio com software disruptivo</p>
      </div>
    </div>
  );
};

export default HeroTitle;
