"use client";
import "./styles/style.css";
import data from "@/app/data/home.json";
import Image from "next/image";
import Carousel from "nuka-carousel";
import MobileObserverContext from "@/app/data/MobileObserverContext";
import { useContext } from "react";

const PartnersSection = () => {
  const partnersData = data.home.parceiros;
  const isMobile = useContext(MobileObserverContext);

  const Background = {
    backgroundImage: `url(${partnersData.background})`,
  };

  const params = {
    autoplay: true,
    withoutControls: true,
    autoplayInterval: 4000,
    speed: 9999,
    slidesToShow: isMobile ? 3 : 6,
    wrapAround: true,
    cellSpacing: isMobile ? 25 : 3,
    style: {
      alignItems: "center",
    },
  };
  return (
    <section style={Background} className="partners-section">
      <h2>Parceiros de sucesso</h2>
      <Carousel {...params} className="carousel">
        {partnersData.images.map((image, index) => (
          <div key={index} className="partner-box">
            <Image
              className="partner-image"
              src={image}
              width={180}
              height={90}
              alt="image"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default PartnersSection;
