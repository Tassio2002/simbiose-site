"use client";
import Image from "next/image";
import "./styles/style.css";
import data from "@/app/data/servicos.json";
import { useState } from "react";

const ServiceButton = (props) => {
  const [isActive, setIsActive] = useState(false);
  const serviceData = data.servicos;
  const buttonBg = `url(${serviceData.background})`;
  const buttonBgActived = `url(${serviceData.backgroundActive})`;
  const background = {
    backgroundImage: `${isActive ? buttonBgActived : buttonBg}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const setActiveButton = () => {
    setIsActive((current = !current));
  };

  return (
    <div className="service-btn-container">
      <button className="service-btn-icon" style={background}>
        <Image src={props.icon} width={64} height={64} alt={props.title} />
      </button>
      <span className="service-btn-title">{props.title}</span>
    </div>
  );
};

export default ServiceButton;
