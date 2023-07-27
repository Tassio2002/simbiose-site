"use client";
import "./styles/style.css";
import data from "@/app/data/servicos.json";
import ButtonsContainer from "./ButtonsContainer";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer/Footer";
import ServiceMainContent from "./MainContent";
import { useContext } from "react";
import ServiceContext from "@/app/data/ServiceContext";

export default function ServicesPage() {
  const { content, setContent, activeButton, setActiveButton } =
    useContext(ServiceContext);

  const serviceData = data.servicos;
  const actualContent = serviceData.content[content];

  const activeActualButton = (index) => {
    setActiveButton(index);
  };

  const setActualContent = (index) => {
    setContent(index);
  };

  const handleClick = (index) => {
    activeActualButton(index);
    setActualContent(index);
  };

  return (
    <div className="bg-background">
      <Header background={serviceData.heroBackground}>
        <ButtonsContainer onClick={handleClick} isActive={activeButton} />
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
