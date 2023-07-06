import Image from "next/image";
import "./styles/style.css";

const StatCard = ({ icon, number, title }) => {
  return (
    <div className="stat-card-container">
      <Image className="icon" src={icon} width={45} height={45} alt="Icon" />
      <span className="number">{number}</span>
      <p className="title">{title}</p>
    </div>
  );
};

export default StatCard;
