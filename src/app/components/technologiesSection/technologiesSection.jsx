import "./styles/style.css";
import TechnologiesCard from "@/app/components/technologiesCard/technologiesCard";
import data from "@/app/data/home.json";
import SectionName from "../global/SectionName/Enterprise";

const TechnologiesSection = () => {
  const TechSectionData = data.home.tecnologias;

  return (
    <div className="technologies-section">
      <SectionName name={"Linguagens"} />
      <div className="technologies-section-title-and-subtitle">
        <span className="technologies-section-title">
          {TechSectionData.title}
        </span>
        <span>{TechSectionData.subtitle}</span>
      </div>
      <div className="technologies-cards">
        {TechSectionData.cards.map((item, index) => {
          return (
            <TechnologiesCard
              title={item.title}
              icons={item.icons}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechnologiesSection;
