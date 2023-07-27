import "./globals.css";
import { Jost } from "next/font/google";
import { ServiceContextProvider } from "./data/ServiceContextProvider";
import { MobileObserverContextProvider } from "./data/MobileObserverContextProvider";
import Script from "next/script";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Simbiose Ventures",
  description: "Simbiose Ventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={jost.className}>
        <MobileObserverContextProvider>
          <ServiceContextProvider>{children}</ServiceContextProvider>
        </MobileObserverContextProvider>
        <Script
          src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          async
        />
        <Script src="http://threejs.org/examples/js/libs/stats.min.js" async />
        <Script src="/scripts/particles.js" async />
        <Script
          src="https://cdn.jsdelivr.net/npm/tsparticles@1.37.4/tsparticles.min.js"
          async
        />
        <Script src="/scripts/particlesContact.js" async />
      </body>
    </html>
  );
}
