"use client";
import { useState } from "react";
import MobileObserverContext from "./MobileObserverContext";
import { useMediaQuery } from "react-responsive";

export function MobileObserverContextProvider({ children }) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <MobileObserverContext.Provider value={isMobile}>
      {children}
    </MobileObserverContext.Provider>
  );
}
