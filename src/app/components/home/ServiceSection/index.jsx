import "./styles/style.css";
import data from "@/app/data/home.json";
import SectionName from "../../global/SectionName/Enterprise";
import { Card } from "@/app/components/card/Card";
import Button from "../../global/Button/Button";
import Carousel from "nuka-carousel";
import { useContext } from "react";
import MobileObserverContext from "@/app/data/MobileObserverContext";
import Link from "next/link";

const ServiceSection = () => {
  const serviceData = data.home.servicos;
  const servicosCardData = data.home.servicos.cards;
  const isMobile = useContext(MobileObserverContext);

  const assets = {
    name: serviceData.name,
    title: serviceData.title,
    subtitle: serviceData.subtitle,
    circle: serviceData.circle,
    arrow: serviceData.arrow,
  };

  const params = {
    autoplay: false,
    withoutControls: true,
    autoplayInterval: 2000,
    slidesToShow: 1,
    wrapAround: false,
    dragThreshold: 0.1,
    style: {
      display: "flex",
      gap: 0,
      width: "max-content",
    },
  };

  if (!isMobile) {
    return (
      <section className="service-section">
        <SectionName name={assets.name} color="text-white" />
        <div className="top-section">
          <div className="service-texts">
            <h2 className="service-title">{assets.title}</h2>
            <p className="service-subtitle">{assets.subtitle}</p>
          </div>
          <div className="service-btn">
            <Button text="Veja Todos" link={"/servicos"} icon={assets.arrow} />
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
  } else {
    return (
      <section className="service-section">
        <SectionName name={assets.name} color="text-white" />
        <div className="top-section">
          <div className="service-texts">
            <h2 className="service-title">{assets.title}</h2>
            <p className="service-subtitle">{assets.subtitle}</p>
          </div>
          <div className="service-btn">
            <Button link="/servicos" text="Veja Todos" icon={assets.arrow} />
          </div>
        </div>
        <div className="services-cards">
          <Carousel {...params} className="card-flex-container">
            {servicosCardData.map((card, index) => (
              <Card
                className="service-card"
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </Carousel>
        </div>
      </section>
    );
  }
};

export default ServiceSection;
