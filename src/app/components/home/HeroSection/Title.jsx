import "./styles/style.css";
import highlightImage from "../../../../../public/hero-title.svg"
import Image from "next/image";

const HeroTitle = () => {
  return (
    <div className="hero-title">
      <div className="highlight">
        <Image
          src={highlightImage}
          width={352}
          height={64}
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
