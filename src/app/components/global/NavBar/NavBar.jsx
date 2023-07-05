"use client";
import "./styles/style.css";
import data from "@/app/data/global-components.json";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "../NavLink";

const NavBar = () => {
  const navData = data.nav;

  const assets = {
    logo: navData.logo,
    sunIcon: navData.buttons.theme.icon,
    globeIcon: navData.buttons.language.icon,
    languageText: navData.buttons.language.currentLanguage,
    themeBackground: navData.buttons.theme.background,
    languageBackground: navData.buttons.language.background,
    menuBackground: navData.menu.background,
  };

  const backgrounds = {
    theme: {
      backgroundImage: `url(${assets.themeBackground})`,
    },
    language: {
      backgroundImage: `url(${assets.languageBackground})`,
    },
    menu: {
      backgroundImage: `url(${assets.menuBackground})`,
    },
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link href="/">
          <Image
            src={assets.logo}
            alt={"Simbiose logo"}
            width={30}
            height={30}
          />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          {navData.navLinks.map((link) => (
            <NavLink key={link.name} href={link.href} name={link.name} />
          ))}
        </ul>
      </div>
      <div className="nav-buttons">
        <button className="theme" style={backgrounds.theme}>
          <Image src={assets.sunIcon} alt={"Sun"} width={19} height={19} />
        </button>
        <button className="language" style={backgrounds.language}>
          <Image src={assets.globeIcon} alt={"Sun"} width={19} height={19} />
          <p>{assets.languageText}</p>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
