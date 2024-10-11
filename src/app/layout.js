import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import { Jost } from "next/font/google";
import { ServiceContextProvider } from "./data/ServiceContextProvider";
import { MobileObserverContextProvider } from "./data/MobileObserverContextProvider";
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
        <title>{metadata.title}</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={jost.className}>
        <MobileObserverContextProvider>
          <SetServicePageIndexContextProvider>
            <ServiceContextProvider>
              {children}
              <Script id="linkedin-tag" strategy="afterInteractive">
                {`
                  _linkedin_partner_id = "5647329";
                  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                  (function(l) {
                    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                    window.lintrk.q=[]}
                    var s = document.getElementsByTagName("script")[0];
                    var b = document.createElement("script");
                    b.type = "text/javascript";b.async = true;
                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                    s.parentNode.insertBefore(b, s);})(window.lintrk);
                `}
              </Script>
              <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-3BVWEJEVTK"
              />
              <Script
                id="google-analytics"
                strategy="afterInteractive" // ou "lazyOnload"
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-3BVWEJEVTK');
                `,
                }}
              />
            </ServiceContextProvider>
          </SetServicePageIndexContextProvider>
        </MobileObserverContextProvider>
      </body>
    </html>
  );
}
