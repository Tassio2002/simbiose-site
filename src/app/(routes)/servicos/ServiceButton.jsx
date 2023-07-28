import Image from "next/image";
import "./styles/style.css";
import data from "@/app/data/servicos.json";

const ServiceButton = ({ icon, title, onClick, isActive, onHover }) => {
  const serviceData = data.servicos;
  const buttonBg = `url(${serviceData.background})`;
  const buttonBgActived = `url(${serviceData.backgroundActive})`;
  const background = {
    backgroundImage: `${isActive ? buttonBgActived : buttonBg}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="service-btn-container">
      <button
        onClick={onClick}
        onMouseEnter={onHover}
        className="service-btn-icon"
        style={background}
      >
        <Image src={icon} width={64} height={64} alt={title} />
      </button>
      <span
        className={isActive ? "service-btn-title-active" : "service-btn-title"}
      >
        {title}
      </span>
    </div>
  );
};

export default ServiceButton;
