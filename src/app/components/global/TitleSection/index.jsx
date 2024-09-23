import "./styles/style.css";
import Container from "../Container/Container";
import data from "@/app/data/capturePage.json";
import Image from "next/image";
import SessionVideo from "@/app/components/movie/SessionVideo";
import Link from "next/link";
const Title = ({ children, background }) => {
  const headerStyle = {
    background: `url(${background}) no-repeat`,
    backgroundSize: "cover",
  };

  const logo = data.capturePage.logo;
  const whatsapp = data.capturePage.whatsapp;
  const src = data.capturePage.videos;

  return (
    <header
      className="max-h-none xl:max-h-screen min-h-full flex flex-col "
      style={headerStyle}
    >
      <div className="body-container ">
        <div className="flex-container min-h-full">
          <div className="flex flex-col  pt-2.5 xl:pt-5 items-center gap-2.5 xl:gap-5 ">
            <div className="flex flex-row items-center justify-between w-full p-5 z-50 ">
              <Link target="_blank " href="/">
                <Image
                  className="max-w-[200px] xl:max-w-none"
                  src={logo}
                  alt="Logo Simbiose"
                  width={200}
                  height={30}
                />
              </Link>
              <Link href={whatsapp.link}>
                <Image
                  src={whatsapp.icon}
                  alt="Logo Whatsapp"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
          <div className="text-white flex flex-row  xl:-mt-[90px] max-w-[1375px] w-full lg:max-h-[1024px] h-screen md:h-auto max-h-min xl:max-h-screen lg:h-screen items-start xl:items-center mx-auto">
            <div className="flex flex-col xl:flex-row gap-1 w-full">
              <div className="flex flex-col w-full text-center xl:text-start py-5 lg:px-20 md:py-20 xl:px-5 xl:py-2.5 px-5">
                <h1 className="text-2xl xl:text-[56px] w-full leading-snug xl:p-0 text-white font-bold  text-center xl:text-start ">
                  Problemas com software em pleno 2024?
                </h1>
                <p className="text-xl  py-5">
                  Impulsione seu faturamento <b> em menos de 90 dias</b> com
                  nossas <b>Soluções Sob Demanda!</b>
                </p>
                <p className="text-xl ">
                  Em apenas <b>30 minutos</b> traremos soluções que já geraram
                  resultados rápidos e expressivos para negócios como o seu.
                </p>
              </div>
              <SessionVideo {...src}></SessionVideo>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Title;
