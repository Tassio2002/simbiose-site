'use client'
import "./styles/style.css";
import data from "@/app/data/servicos.json";
import ServiceButton from "./ServiceButton";
import { useState } from "react";

export

const ButtonsContainer = (props) => {
  const [activeButton, setActiveButton] = useState(null)
  const serviceData = data.servicos;
  const buttons = serviceData.buttons;
  
  const handleClick = (index) => {
    setActiveButton(index)
  }

  return (
    <div className="btn-flex-container">
      {buttons.map((button, index) => (
        <ServiceButton
          onHover={props.onHover}
          key={index}
          isActive={activeButton === index}
          onClick={() => handleClick(index)}
          icon={button.icon}
          title={button.title}
        />
      ))}
    </div>
  );
};

export default ButtonsContainer;
