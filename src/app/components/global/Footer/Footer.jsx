import "./styles/style.css";
import data from "@/app/data/global-components.json";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { SetServicePageIndexContext } from "@/app/data/setServicePageIndex";

const Footer = () => {
  const footerData = data.footer;

  const assets = {
    footerBackground: footerData.theme.background,
  };

  const themeBackground = {
    backgroundImage: `url(${assets.footerBackground})`,
  };

  const footerServices = data.footer.services.links;
  const { index, setIndex, changeValue } = useContext(
    SetServicePageIndexContext
  );

  return (
    <footer className="footer-container" style={themeBackground}>
      <div className="content">
        <div className="enterprise">
          <Image
            src={footerData.enterprise.brand}
            width={200}
            height={30}
            alt={"Simbiose Logo"}
          />
          <p>{footerData.enterprise.description}</p>
        </div>
        <div className="services">
          <div className="services-title">
            <p>{footerData.services.title}</p>
          </div>
          <div className="services-items">
            {footerServices.map((service, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => changeValue(service.card)}
                  href={"/servicos"}
                >
                  <div className={"service-item upscale-on-hover"}>
                    <Image
                      src={footerData.services.icon}
                      width={17}
                      height={7}
                      alt={"Blue Arrow Right"}
                    />
                    <p>{service.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="contacts">
          <div className="contacts-title">
            {footerData.services.contact.title}
          </div>
          <div className="items">
            <div className="info">
              {footerData.services.contact.info.map((item, index) => {
                return (
                  <div key={index} className="info-item">
                    <div className="item-icon">
                      <Image
                        src={item.icon}
                        width={item.iconwidth}
                        height={item.iconheight}
                        alt={"Icon"}
                      />
                    </div>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="social">
              {footerData.services.contact.social.map((item, index) => {
                return (
                  <Link key={index} href={item.link}>
                    <div className="social-item upscale-on-hover">
                      <Image
                        src={item.icon}
                        width={30}
                        height={30}
                        alt={"Social Media Icon"}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
