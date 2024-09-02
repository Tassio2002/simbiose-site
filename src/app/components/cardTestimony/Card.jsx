import Image from "next/image";
import "./styles/style.css";
import data from "@/app/data/capturePage.json";

const Card = (props) => {
  return (
    <div className="card-container h-fit max-w-screen w-full md:max-w-1/3">
      <div className="flex flex-row items-end">
        <Image width={48} height={48} src={props.imagem} alt={props.nome} />
        <h2 className="title pl-5">{props.empresa}</h2>
      </div>
      <div className="card-content h-fit max-w-screen md:max-w-none">
        <h3 className="font-semibold ">{props.nome}</h3>
        <p>{props.depoimento}</p>
      </div>
    </div>
  );
};
export default Card;
