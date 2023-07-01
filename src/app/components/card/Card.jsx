import Image from "next/image";
import "./styles/style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <Image width={64} height={64} src={props.icon} alt={props.alt} />
      <h1 className="title">{props.title}</h1>
      <p>
        {props.description}
      </p>
    </div>
  );
};
