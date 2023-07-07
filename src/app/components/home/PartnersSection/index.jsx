"use client";
import "./styles/style.css";
import data from "@/app/data/home.json";
import Image from "next/image";
import Carousel from "nuka-carousel";

const PartnersSection = () => {
  const partnersData = data.home.parceiros;

  const Background = {
    backgroundImage: `url(${partnersData.background})`,
  };

  const params = {
    autoplay: true,
    withoutControls: true,
    autoplayInterval: 2000,
    slidesToShow: 6,
    wrapAround: true,
    style: {
      alignItems: "center",
    },
  };
  return (
    <section style={Background} className="partners-section">
      <Carousel {...params} className="carousel">
        {partnersData.images.map((image, i) => (
          <div key={i} className="partner-box" >
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
