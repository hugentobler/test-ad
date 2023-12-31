import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import AdBanner from "./AdBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          strategy="lazyOnload"
          id="script-component-ad"
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
        <Script id="define-slot" strategy="lazyOnload">{`
            window.googletag = window.googletag || {cmd: []};
            googletag.cmd.push(function() {
              googletag
                  .defineSlot(
                      '/22334301867/bd_desk_ros_billboard_prod', [[970, 250], [728, 90]], 'div-gpt-ad-1701401035556-0')
                  .addService(googletag.pubads());
              googletag.enableServices();
            });
        `}</Script>
        <AdBanner id="div-gpt-ad-1701401035556-0" height={90} width={728} />
        {children}
      </body>
    </html>
  );
}
