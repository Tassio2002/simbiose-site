"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles/style.css";
import data from "../../../data/global-components.json";
export const NavLink = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActtive = pathname.endsWith(props.href);
  const menuBackground = data.nav.menu.background;

  const openMenu = () => {
    setIsOpen((current) => !current);
  };

  const closeMenu = () => {
    setIsOpen((current) => !current);
  };
  const menu = (
    <div
      className={`dropdown-menu ${isOpen ? "visible" : ""}`}
      style={{ backgroundImage: `url(${menuBackground})` }}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <ul className="menu-list">
        {data.nav.menu.links.map((link) => (
          <li key={link.name}>
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
        className={`${isActtive ? "active" : ""}`}
      >
        <Link key={props.name} href={props.href}>
          {isActtive ? `${props.name} +` : `${props.name}`}
        </Link>
      </li>
      {props.name === "Serviços" ? menu : ""}
    </>
  );
};
