import ServiceSection from "@/app/components/home/ServiceSection";
import "./styles/style.css";
import data from "../../data/home.json";
import Statistics from "@/app/components/home/Statistics/Statistics";
import Container from "@/app/components/global/Container/Container";
import { Card } from "@/app/components/card/Card";


export default function Home() {
  const servicosCardData = data.home.servicos.cards;
  return (
    <>
      <Container>
        <div className="card-flex-container">
          {servicosCardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
      <Statistics />
      <ServiceSection />
    </>
  );
}
