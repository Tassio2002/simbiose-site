import Image from "next/image";
import "./styles/style.css";

const MissionCard = ({ icon, width, height, alt, title, description }) => {
  return (
    <div className="mission-card-container">
      <Image src={icon} width={width} height={height} alt={alt} />
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
};

export default MissionCard;
