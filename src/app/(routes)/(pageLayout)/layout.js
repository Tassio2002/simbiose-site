"use client";
import HeroAboutPage from "@/app/components/about/heroAboutPage/heroAboutPage";
import Particles from "@/app/components/global/Particles/particles";
import { usePathname } from "next/navigation";
import Footer from "../../components/global/Footer/Footer";
import Header from "../../components/global/Header";
import { Hero } from "../../components/home/HeroSection";
import data from "@/app/data/home.json";

const SelectHeader = () => {
  const pathname = usePathname();

  if (pathname.endsWith("/")) {
    return <Hero />;
  } else if (pathname.endsWith("/sobre")) {
    return <HeroAboutPage />;
  }
};

export default function pagesLayout({ children }) {
  const particlesData = data.home.hero.background;

  return (
    <div className="bg-background">
      <div
        className="hero-particles-and-header"
        style={{ position: "relative" }}
      >
        <Particles background={particlesData}></Particles>
        <Header>{SelectHeader()}</Header>
      </div>
      {children}
      <Footer />
    </div>
  );
}
