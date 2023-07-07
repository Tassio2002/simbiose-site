import Image from "next/image";
import "./styles/style.css";

const TechnologiesCard = ({ title, icons }) => {
  return (
    <div className="cardSection">
      <span className="tech-card-title">{title}</span>
      <div className="techCard">
        <div className="tech-card-content">
          {icons.map((icon, index) => {
            return (
              <Image
                src={icon.icon}
                width={icon.width}
                height={icon.height}
                alt={"Icon"}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
