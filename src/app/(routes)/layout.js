import Container from "../components/global/Container/Container";
import NavBar from "../components/global/NavBar/NavBar";
import Footer from "../components/global/Footer/Footer";
import { Hero } from "../components/home/HeroSection";

export default function pagesLayout({ children }) {
  return (
    <div className="bg-background">
      <Hero />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
