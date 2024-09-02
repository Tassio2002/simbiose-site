import "./styles/style.css";
import Container from "../Container/Container";
import data from "@/app/data/capturePage.json";
import Image from "next/image";

const Title = ({ children, background }) => {
  const headerStyle = {
    background: `url(${background}) no-repeat`,
    backgroundSize: "cover",
  };

  const logo = data.capturePage.logo;
  const linkedin = data.capturePage.linkedin;
  const whatsapp = data.capturePage.whatsapp;

  return (
    <header style={headerStyle}>
      <Container>
        {" "}
        <div className="flex flex-col pt-2.5 md:pt-5 items-center gap-2.5 md:gap-5 ">
          <div className="flex flex-row items-center justify-between w-full p-5 ">
            <a href={linkedin.link}>
              <Image
                src={linkedin.icon}
                alt="Logo Linkedin"
                width={30}
                height={30}
              />
            </a>
            <a href="/">
              <Image
                className="max-w-[200px] md:max-w-none"
                src={logo}
                alt="Logo Simbiose"
                width={285}
                height={49}
              />
            </a>
            <a href={whatsapp.link}>
              <Image
                src={whatsapp.icon}
                alt="Logo Whatsapp"
                width={30}
                height={30}
              />
            </a>
          </div>
          <h1 className="text-2xl md:text-5xl w-full px-5 md:p-0 text-white font-bold leading-relaxed md:w-3/4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
      </Container>
    </header>
  );
};

export default Title;
