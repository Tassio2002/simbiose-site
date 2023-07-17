"use client";
import { useState } from "react";
import ServiceContext from "./ServiceContext";

export function ServiceContextProvider({ children }) {
  const [content, setContent] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <ServiceContext.Provider
      value={{ content, setContent, activeButton, setActiveButton }}
    >
      {children}
    </ServiceContext.Provider>
  );
}
