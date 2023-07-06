import Image from "next/image";
import "./styles/style.css";
import data from "@/app/data/global-components.json";

const CardButton = () => {
  const cardData = data.card;

  return (
    <div className="card-button-container">
      <button className="card-button">Ver Mais</button>
      <Image src={cardData.cardButtonIcon} width={18} height={5} alt="Arrow" />
    </div>
  );
};

export default CardButton;
