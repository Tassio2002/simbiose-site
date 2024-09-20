import "./styles/style.css";
import data from "@/app/data/home.json";
import NavBar from "../../global/NavBar/NavBar";
import Container from "../../global/Container/Container";
import SectionName from "../../global/SectionName/Enterprise";
import HeroTitle from "./Title";
import HeroImage from "./HeroImage";
import HighlightBtn from "../../global/HighlightBtn/HighlightBtn";
import MobileObserverContext from "@/app/data/MobileObserverContext";
import { useContext } from "react";
import MeetUs from "./MeetUS/MeetUs";

export const Hero = () => {
  const heroData = data.home.hero;
  const assets = {
    subtitle: heroData.leftDiv.texts.subtitle,
    enterpriseName: heroData.leftDiv.enterprise.name,
  };
  const isMobile = useContext(MobileObserverContext);
  return (
    <div className="flex-hero">
      <div className="hero-text">
        <SectionName name={assets.enterpriseName} />
        <HeroTitle />
        <p className="subtitle">{assets.subtitle}</p>
        <div className="flex flex-row gap-3">
          <HighlightBtn />
          <HighlightBtn link={"/consultoria"} text={"Quero uma consultoria"} />
        </div>
        {isMobile && <MeetUs />}
      </div>

      <div className="hero-image">
        <HeroImage />
      </div>
    </div>
  );
};
