'use client'
import "./styles/style.css";
import data from "@/app/data/servicos.json";
import ButtonsContainer from "./ButtonsContainer";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer/Footer";
import ServiceMainContent from "./MainContent";
import { useState } from "react";

export default function ServicesPage() {
  const [content, setContent] = useState(0)
  const serviceData = data.servicos
  const actualContent = serviceData.content[content]

  const setActualContent = (index) => {
    setContent(index)
  }
  return (
    <div className="bg-background">
      <Header>
        <ButtonsContainer onHover={setActualContent} />
        <ServiceMainContent title={actualContent.title} description={actualContent.description} src={actualContent.img} />
      </Header>
      <Footer />
    </div>
  );
}
