import "./styles/style.css";
import data from "@/app/data/home.json";
import NavBar from "../../global/NavBar/NavBar";
import Container from "../../global/Container/Container";
import SectionName from "../../global/SectionName/Enterprise";
import HeroTitle from "./Title";
import HeroImage from "./HeroImage";

export const Hero = () => {
  const heroData = data.home.hero;
  const assets = {
    background: heroData.background,
    subtitle: heroData.leftDiv.texts.subtitle,
    enterpriseName: heroData.leftDiv.enterprise.name
  };
  const heroStyle = {
    background: `url(${assets.background}) #060922 no-repeat`,
    backgroundSize: "cover",
  };
  return (
    <header style={heroStyle}>
      <Container>
        <NavBar />
        <div className="flex-hero">
          <div className="hero-text">
            <SectionName name={assets.enterpriseName}/>
            <HeroTitle />
            <p className="subtitle">{assets.subtitle}</p>
          </div>
          <div className="hero-image">
            <HeroImage />
          </div>
        </div>
      </Container>
    </header>
  );
};
