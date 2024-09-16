"use client";
import "./styles/style.css";
import Title from "@/app/components/global/TitleSection";
import Card from "@/app/components/cardTestimony/Card";
import ContactSection from "@/app/components/home/ContactSection";

import data from "@/app/data/capturePage.json";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function CapturePage() {
  const background = data.capturePage.background;
  const depoimentos = data.capturePage.depoimentos;

  return (
    <div className={`bg-background ${jost.className}`}>
      <Title background={background}></Title>

      <div className="flex flex-col md:flex-row md:grow max-w-[1375px] w-full mx-auto py-8 md:py-16 gap-5 md:gap-10 items-center md:items-start md:justify-start">
        {depoimentos.map((depoimento, index) => (
          <Card
            key={index}
            imagem={depoimento.imagem}
            nome={depoimento.nome}
            empresa={depoimento.empresa}
            depoimento={depoimento.depoimento}
          />
        ))}
      </div>
      <div id="formulario" className="py-5 md:py-10 min-h-screen">
        <ContactSection
          titleForm={"Entre em contato conosco!"}
          contacts={"False"}
        />
      </div>
    </div>
  );
}
