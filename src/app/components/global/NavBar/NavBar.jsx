import "./styles/style.css";
import data from "@/app/data/global-components.json";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const navData = data.nav;
  const assets = {
    logo: navData.logo,
    sunIcon: navData.buttons.theme.icon,
    globeIcon: navData.buttons.language.icon,
    languageText: navData.buttons.language.currentLanguage,
    themeBackground: navData.buttons.theme.background,
    languageBackground: navData.buttons.language.background,
  };

  const themeBackground = {
    backgroundImage: `url(${assets.themeBackground})`,
  };

  const languageBackground = {
    backgroundImage: `url(${assets.languageBackground})`,
  };
  console.log(navData);
  // li deve ser link
  return (
    <nav className="nav-bar">
      <div className="logo">
        <Image src={assets.logo} alt={"Simbiose logo"} width={30} height={30} />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link href="/sobre">Home +</Link>
          </li>
          <li>
            <Link href="/sobre">Serviços</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/sobre">Contato</Link>
          </li>
          <li>
            <Link href="/sobre">Trabalhe Conosco</Link>
          </li>
        </ul>
      </div>
      <div className="nav-buttons">
        <button className="theme" style={themeBackground}>
          <Image src={assets.sunIcon} alt={"Sun"} width={19} height={19} />
        </button>
        <button className="language" style={languageBackground}>
          <Image src={assets.globeIcon} alt={"Sun"} width={19} height={19} />
          <p>{assets.languageText}</p>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
