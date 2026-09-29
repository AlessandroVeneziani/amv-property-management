import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createMetadata, siteConfig } from "@/content/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = createMetadata({
  title: `${siteConfig.name} | ${siteConfig.definition}`,
  description: siteConfig.metadataDescription
});

const GA_MEASUREMENT_ID = "G-N7L95Q5140";
const OPENAI_ADS_PIXEL_ID = "48SGYjWHfS6FCR3ZcJCpgi";
const IUBENDA_UNIFIED_EMBED_ID = "8a879b2f-b037-4035-8e30-0afe0eb6858f";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <Script
        src={`https://embeds.iubenda.com/widgets/${IUBENDA_UNIFIED_EMBED_ID}.js`}
        strategy="beforeInteractive"
      />
      <script
        async
        type="text/plain"
        className="_iub_cs_activate"
        data-iub-purposes="4"
        data-suppressedsrc={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        type="text/plain"
        className="_iub_cs_activate-inline"
        data-iub-purposes="4"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `
        }}
      />
      <script
        type="text/plain"
        className="_iub_cs_activate-inline"
        data-iub-purposes="5"
        dangerouslySetInnerHTML={{
          __html: `
          (function (w, d, s, u) {
            if (w.oaiq) return;
            var q = function () {
              q.q.push(arguments);
            };
            q.q = [];
            w.oaiq = q;
            var js = d.createElement(s);
            js.async = true;
            js.src = u;
            var f = d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(js, f);
          })(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");

          oaiq("init", {
            pixelId: "${OPENAI_ADS_PIXEL_ID}",
          });
        `
        }}
      />
      <body className="site-ambient-background text-sand antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
