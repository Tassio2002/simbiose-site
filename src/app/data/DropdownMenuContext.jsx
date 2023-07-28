"use client";
import { createContext, useState } from "react";

export const DropdownMenuContext = createContext({});

export function DropdownMenuContextProvider({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandMenu = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <DropdownMenuContext.Provider
      value={{ isExpanded, setIsExpanded, expandMenu }}
    >
      {children}
    </DropdownMenuContext.Provider>
  );
}
