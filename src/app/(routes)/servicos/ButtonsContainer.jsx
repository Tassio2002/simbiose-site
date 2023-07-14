"use client";
import "./styles/style.css";
import data from "@/app/data/servicos.json";
import ServiceButton from "./ServiceButton";
import { useState } from "react";

export const ButtonsContainer = (props) => {
  const serviceData = data.servicos;
  const buttons = serviceData.buttons;

  return (
    <div className="btn-flex-container">
      {buttons.map((button, index) => (
        <ServiceButton
          key={index}
          isActive={props.isActive === index}
          onClick={() => props.onClick(index)}
          icon={button.icon}
          title={button.title}
        />
      ))}
    </div>
  );
};

export default ButtonsContainer;
