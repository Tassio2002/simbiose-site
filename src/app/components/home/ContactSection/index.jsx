import "./styles/style.css";
import data from "@/app/data/home.json";
import Container from "../../global/Container/Container";
import Image from "next/image";
import ContactInfo from "./contacts";
import ContactForm from "./ContactForm";
import { useEffect } from "react";
const contactData = data.home.contato;

export const assets = {
  background: {
    backgroundImage: `url(${contactData.background}#060922)`,
  },
  sectionName: contactData.name,
  contacts: contactData.contacts,
  socialMedias: contactData.social,
};

const ContactSection = ({ titleForm, contacts }) => {
  function createStars() {
    const stars = 100; // Número de estrelas

    for (let i = 0; i < stars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Define duração da animação para cada estrela
      document.getElementById("contact-section").appendChild(star);
    }
  }

  useEffect(() => {
    createStars();
  }, []);

  return (
    <div className="contact-section" id="contact-section">
      <Container>
        <div className="contact-flex justify-center">
          {contacts == "True" ?? (
            <div className="contact-box">
              <div className="contacts-infos">
                {assets.contacts.map((contact) => (
                  <ContactInfo
                    key={contact.contact}
                    src={contact.icon}
                    value={contact.contact}
                    title={contact.title}
                  />
                ))}
                <div className="social-media">
                  {assets.socialMedias.map((socialMedia, index) => (
                    <a key={index} href={socialMedia.link} target="_blank">
                      <Image
                        className="social-media-icon upscale-on-hover"
                        src={socialMedia.icon}
                        width={35}
                        height={35}
                        alt={socialMedia.alt}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="form">
            <ContactForm titleForm={titleForm} pageAgradecimento={true} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
