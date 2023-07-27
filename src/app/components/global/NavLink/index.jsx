"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import "./styles/style.css";
import data from "../../../data/global-components.json";
import ServiceContext from "@/app/data/ServiceContext";

export const NavLink = (props) => {
  const { content, setContent, activeButton, setActiveButton } =
    useContext(ServiceContext);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActtive = pathname.endsWith(props.href);
  const menuBackground = data.nav.menu.background;

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClick = (index) => {
    setContent(index);
    setActiveButton(index);
  };
  const menu = (
    <div
      className={'dropdown-menu'}
      style={{ backgroundImage: `url(${menuBackground})` }}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <ul className="menu-list">
        {data.nav.menu.links.map((link, index) => (
          <li key={link.name} onClick={() => handleClick(index)}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <li
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        key={props.name}
        className={`menu-link ${isActtive ? "active" : ""}`}
      >
        <Link key={props.name} href={props.href}>
          {isActtive ? `${props.name} +` : `${props.name}`}
        </Link>
        {props.name === "Serviços" ? menu : ""}
      </li>
    </>
  );
};
