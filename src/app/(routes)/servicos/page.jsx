"use client";
import "./styles/style.css";
import data from "@/app/data/servicos.json";
import ButtonsContainer from "./ButtonsContainer";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer/Footer";
import ServiceMainContent from "./MainContent";
import { useState } from "react";

export default function ServicesPage() {
  const [content, setContent] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const serviceData = data.servicos;
  const actualContent = serviceData.content[content];
  // trocar nome da function
  const handleClick = (index) => {
    setActiveButton(index);
  };
  const setActualContent = (index) => {
    setContent(index);
    handleClick(index);
    console.log(activeButton);
  };
  return (
    <div className="bg-background">
      <Header>
        <ButtonsContainer onClick={setActualContent} isActive={activeButton} />
        <ServiceMainContent
          title={actualContent.title}
          description={actualContent.description}
          src={actualContent.img}
        />
      </Header>
      <Footer />
    </div>
  );
}
