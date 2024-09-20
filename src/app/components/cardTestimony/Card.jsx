import Image from "next/image";
import "./styles/style.css";
import data from "@/app/data/capturePage.json";

const Card = (props) => {
  return (
    <div className="flex flex-col max-w-[450px]  ">
      <div className="flex  w-full flex-row items-end justify-center min-h-auto lg:min-h-[75px] pb-2.5 lg:pb-1">
        <Image
          className="object-cover"
          width={150}
          height={75}
          src={props.imagem}
          alt={props.nome}
        />
      </div>
      <div className="card-container  m-0 h-fit max-w-screen w-full md:max-w-1/3  justify-start">
        <div className="card-content h-full text-start my-auto max-w-screen md:max-w-none ">
          <h3 className="font-semibold  pb-2.5">{props.nome}</h3>
          <p className="text-justify">{props.depoimento}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
