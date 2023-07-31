import Image from "next/image";
import CardButton from "../cardButton/cardButton";
import "./styles/style.css";
import Link from "next/link";
import {useContext} from "react";
import {SetServicePageIndexContext} from "@/app/data/setServicePageIndex";

export const Card = (props) => {

  const { changeValue } = useContext(
    SetServicePageIndexContext
  );

  return (
    <div className="card-container">
      <Image width={48} height={48} src={props.icon} alt={props.alt} />
      <div className="card-content">
        <h1 className="title">{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <Link
        key={props.key}
        onClick={() => changeValue(props.card_id)}
        href={"/servicos"}
      >
        <CardButton />
      </Link>
    </div>
  );
};
