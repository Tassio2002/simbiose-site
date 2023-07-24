"use client";
import "./styles/style.css";
import ServiceSection from "@/app/components/home/ServiceSection";
import Statistics from "@/app/components/home/Statistics/Statistics";
import Container from "@/app/components/global/Container/Container";
import PartnersSection from "@/app/components/home/PartnersSection";
import TechnologiesSection from "@/app/components/technologiesSection/technologiesSection";
import ContactSection from "@/app/components/home/ContactSection";
import MobileObserverContext from "@/app/data/MobileObserverContext";
import { useContext } from "react";

export default function Home() {
  const isMobile = useContext(MobileObserverContext);
  if (!isMobile) {
    return (
      <>
        <Container>
          <ServiceSection />
        </Container>
        <PartnersSection />
        <Container>
          <TechnologiesSection />
        </Container>
        <Statistics />
        <ContactSection />
      </>
    );
  } else {
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
}
