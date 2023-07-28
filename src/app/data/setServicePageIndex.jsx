"use client";
import { createContext, useState } from "react";

export const SetServicePageIndexContext = createContext({});

export function SetServicePageIndexContextProvider({ children }) {
  const [index, setIndex] = useState(0);

  function changeValue(value) {
    setIndex(value);
  }

  return (
    <SetServicePageIndexContext.Provider
      value={{ index, setIndex, changeValue }}
    >
      {children}
    </SetServicePageIndexContext.Provider>
  );
}
