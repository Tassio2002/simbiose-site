import "./globals.css";
import { Jost } from "next/font/google";
import { ServiceContextProvider } from "./data/ServiceContextProvider";
import { MobileObserverContextProvider } from "./data/MobileObserverContextProvider";
import Script from "next/script";
import Head from "next/head";
import { SetServicePageIndexContextProvider } from "./data/setServicePageIndex";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Simbiose Ventures",
  description: "Simbiose Ventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
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
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" />
      <Script src="/scripts/particles.js" />
    </html>
  );
}
