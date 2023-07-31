import "./styles/style.css";
import data from "@/app/data/home.json";
import Container from "../../global/Container/Container";
import SectionName from "../../global/SectionName/Enterprise";
import Image from "next/image";
import ContactInfo from "./contacts";
import ContactForm from "./ContactForm";

const contactData = data.home.contato;

export const assets = {
  background: {
    backgroundImage: `url(${contactData.background}#060922)`,
  },
  sectionName: contactData.name,
  contacts: contactData.contacts,
  socialMedias: contactData.social,
};
const ContactSection = () => {
  return (
    <div className="contact-section" style={assets.background}>
      <Container>
        <SectionName name={assets.sectionName} color="text-white" />
        <div className="contact-flex">
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
                {assets.socialMedias.map((socialMedia) => (
                  <a key={socialMedia} href={socialMedia.link} target="_blank">
                    <Image
                      className="social-media-icon upscale-on-hover"
                      src={socialMedia.icon}
                      width={50}
                      height={50}
                      alt="social media"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="form">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
