import "./globals.css";
import { Jost } from "next/font/google";
import { ServiceContextProvider } from "./data/ServiceContextProvider";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Simbiose Ventures",
  description: "Simbiose Ventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={jost.className}>
        <ServiceContextProvider>{children}</ServiceContextProvider>
      </body>
    </html>
  );
}
