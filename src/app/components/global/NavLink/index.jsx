"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import "./styles/style.css";
import data from "../../../data/global-components.json";
import { DropdownMenuContext } from "@/app/data/DropdownMenuContext";
import MobileObserverContext from "@/app/data/MobileObserverContext";
import { SetServicePageIndexContext } from "@/app/data/setServicePageIndex";

export const NavLink = (props) => {
  const pathname = usePathname();
  const isServicesPage = pathname === "/servicos";
  const isActive = pathname.endsWith(props.href);
  const menuBackground = data.nav.menu.background;
  const isMobile = useContext(MobileObserverContext);

  const { expandMenu } = useContext(DropdownMenuContext);

  const { changeValue } = useContext(SetServicePageIndexContext);

  const handleClick = (index) => {
    changeValue(index);
    expandMenu();
  };

  const menu = (
    <div
      className={"dropdown-menu"}
      style={{ backgroundImage: `url(${menuBackground})` }}
    >
      <ul className="menu-list">
        {data.nav.menu.links.map((link, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <li key={props.name} className={`menu-link ${isActive ? "active" : ""}`}>
        <Link
          key={props.name}
          href={props.href}
          onClick={expandMenu}
          target={props.target}
          className={`${isActive && !isMobile && "activeLink"}`}
        >
          {props.name}
        </Link>
        {props.name === "Serviços" && !isServicesPage ? menu : ""}
      </li>
    </>
  );
};
