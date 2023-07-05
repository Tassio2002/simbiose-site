import { Card } from "@/app/components/card/Card";
import "./styles/style.css";
import data from "../../data/home.json";


export default function Home() {
  const servicosCardData = data.home.servicos.cards;
  return (
    <>
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
    </>
  );
}
