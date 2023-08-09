"use client";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import { Jost } from "next/font/google";
import { ServiceContextProvider } from "./data/ServiceContextProvider";
import { MobileObserverContextProvider } from "./data/MobileObserverContextProvider";
import { SetServicePageIndexContextProvider } from "./data/setServicePageIndex";
import { initLinkedInPixel } from "../../public/scripts/pixelScript.js";
import { initLinkedPixel2 } from "../../public/scripts/googleTag.js";
import { useEffect } from "react";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Simbiose Ventures",
  description: "Simbiose Ventures",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    initLinkedInPixel();
    initLinkedPixel2();
  }, []);

  return (
    <html lang="pt-br">
      <Head>
        <title>Simbiose Ventures</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <body className={jost.className}>
        <MobileObserverContextProvider>
          <SetServicePageIndexContextProvider>
            <ServiceContextProvider>{children}</ServiceContextProvider>
          </SetServicePageIndexContextProvider>
        </MobileObserverContextProvider>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L1VDPRBXQQ%22%3E"
        async
      ></Script>
    </html>
  );
}
