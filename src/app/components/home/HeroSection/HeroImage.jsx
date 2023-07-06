import "./styles/style.css";
import heroImage from "../../../../../public/hero-image.svg";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div>
      <Image src={heroImage} width={560} height={518} alt="hand image" />
    </div>
  );
};

export default HeroImage;
