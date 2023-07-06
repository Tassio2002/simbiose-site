import Footer from "../components/global/Footer/Footer";
import { Hero } from "../components/home/HeroSection";

export default function pagesLayout({ children }) {
  return (
    <div className="bg-background">
      <Hero />
      {children}
      <Footer />
    </div>
  );
}
