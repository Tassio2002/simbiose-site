'use client'
import "./styles/style.css";
import data from "@/app/data/servicos.json";
import ButtonsContainer from "./ButtonsContainer";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer/Footer";
import ServiceMainContent from "./MainContent";

export default function ServicesPage() {
  const serviceData = data.servicos
  const content = serviceData.content[0]

  const teste = () => {
    console.log('teste');
  }
  return (
    <div className="bg-background">
      <Header>
        <ButtonsContainer onHover={teste} />
        <ServiceMainContent title={content.title} description={content.description} src={content.img} />
      </Header>
      <Footer />
    </div>
  );
}
