import "./globals.css";
import { Jost } from "next/font/google";
import { ServiceContextProvider } from "./data/ServiceContextProvider";
import { MobileObserverContextProvider } from "./data/MobileObserverContextProvider";

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
      </body>
    </html>
  );
}
