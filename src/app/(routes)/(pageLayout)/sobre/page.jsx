import MissionCard from "@/app/components/about/missionCard/missionCard";
import Container from "@/app/components/global/Container/Container";
import "./styles/style.css";
import data from "@/app/data/about.json";

export default function SobrePage() {
  const aboutData = data.aboutPage.cards;

  return (
    <Container>
      <div className="mission-cards-wrapper">
        {aboutData.map((card, index) => {
          return (
            <MissionCard
              key={index}
              icon={card.icon}
              width={card.width}
              height={card.height}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </Container>
  );
}
