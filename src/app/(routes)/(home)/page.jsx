import { Card } from "@/app/components/card/Card";
import Link from "next/link";
import "./styles/style.css";
import data from "../../data/home.json";

export default function Home() {
  const servicosCardData = data.home.servicos.cards;
  return (
    <>
      <h1 className="title">Hello NextJS</h1>
      <Link href="/servicos" className="btn_blue">
        Ir para serviços
      </Link>
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
