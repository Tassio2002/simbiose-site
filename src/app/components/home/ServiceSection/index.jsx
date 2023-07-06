import "./styles/style.css";
import data from "@/app/data/home.json";
import SectionName from "../../global/SectionName/Enterprise";
import { Card } from "@/app/components/card/Card";
import Button from "../../global/Button/Button";

const ServiceSection = () => {
  const serviceData = data.home.servicos;
  const servicosCardData = data.home.servicos.cards;

  const assets = {
    name: serviceData.name,
    title: serviceData.title,
    subtitle: serviceData.subtitle,
    circle: serviceData.circle,
    arrow: serviceData.arrow,
  };

  return (
    <section className="service-section">
      <SectionName name={assets.name} color="text-white" />
      <div className="top-section">
        <div className="service-texts">
          <h2 className="service-title">{assets.title}</h2>
          <p className="service-subtitle">{assets.subtitle}</p>
        </div>
        <div className="service-btn">
          <Button link="/" text="Veja Todos" icon={assets.arrow} />
        </div>
      </div>

      <div className="card-flex-container">
        {servicosCardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
