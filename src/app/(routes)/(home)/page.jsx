import "./styles/style.css";
import data from "../../data/home.json";
import ServiceSection from "@/app/components/home/ServiceSection";
import Statistics from "@/app/components/home/Statistics/Statistics";
import Container from "@/app/components/global/Container/Container";
import PartnersSection from "@/app/components/home/PartnersSection";
import TechnologiesSection from "@/app/components/technologiesSection/technologiesSection";
import ContactSection from "@/app/components/home/ContactSection";

export default function Home() {
  const servicosCardData = data.home.servicos.cards;
  return (
    <>
      <Container>
        <ServiceSection />
      </Container>
      <Statistics />
      <Container>
        <TechnologiesSection />
      </Container>
      <PartnersSection />
      <ContactSection />
    </>
  );
}
