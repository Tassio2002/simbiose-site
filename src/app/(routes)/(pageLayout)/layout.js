"use client";
import { usePathname } from "next/navigation";
import Footer from "../../components/global/Footer/Footer";
import Header from "../../components/global/Header";
import { Hero } from "../../components/home/HeroSection";

const SelectHeader = () => {
  const pathname = usePathname();

  if (pathname.endsWith("/")) {
    return <Hero />;
  } else if (pathname.endsWith("/sobre")) {
    return <p>Sobre</p>;
  }
};

export default function pagesLayout({ children }) {
  return (
    <div className="bg-background">
      <Header>{SelectHeader()}</Header>
      {children}
      <Footer />
    </div>
  );
}