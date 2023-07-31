"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import "./styles/style.css";
import data from "../../../data/global-components.json";
import ServiceContext from "@/app/data/ServiceContext";
import { DropdownMenuContext } from "@/app/data/DropdownMenuContext";
import MobileObserverContext from "@/app/data/MobileObserverContext";

export const NavLink = (props) => {
  const { content, setContent, activeButton, setActiveButton } =
    useContext(ServiceContext);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isServicesPage = pathname === "/servicos";
  const isActtive = pathname.endsWith(props.href);
  const menuBackground = data.nav.menu.background;
  const isMobile = useContext(MobileObserverContext);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const { expandMenu } = useContext(DropdownMenuContext);

  const handleClick = (index) => {
    setContent(index);
    setActiveButton(index);
    expandMenu();
  };

  const menu = (
    <div
      className={"dropdown-menu"}
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
        <Link key={props.name} href={props.href} onClick={expandMenu}>
          {isActtive && !isMobile ? `${props.name} +` : `${props.name}`}
        </Link>
        {props.name === "Serviços" && !isServicesPage ? menu : ""}
      </li>
    </>
  );
};
