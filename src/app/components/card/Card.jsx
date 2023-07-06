import Image from "next/image";
import CardButton from "../cardButton/cardButton";
import "./styles/style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <Image width={48} height={48} src={props.icon} alt={props.alt} />
      <div className="card-content">
        <h1 className="title">{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <CardButton />
    </div>
  );
};
