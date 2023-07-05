import { Card } from "@/app/components/card/Card";
import Link from "next/link";
import "./styles/style.css";
import data from "../../data/home.json";
import Container from "@/app/components/global/Container/Container";
import NavBar from "@/app/components/global/NavBar/NavBar";

export default function Home() {
  const servicosCardData = data.home.servicos.cards;
  return (
    <>
      <div className="flex-container">
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
