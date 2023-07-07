import ServiceSection from "@/app/components/home/ServiceSection";
import "./styles/style.css";
import data from "../../data/home.json";
import Statistics from "@/app/components/home/Statistics/Statistics";
import Container from "@/app/components/global/Container/Container";

export default function Home() {
  const servicosCardData = data.home.servicos.cards;
  return (
    <>
      <Container>
        <ServiceSection />
      </Container>
      <Statistics />
    </>
  );
}
