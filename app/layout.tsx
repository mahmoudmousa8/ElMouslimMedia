import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "../data/site-config";
import { CustomCursor } from "./custom-cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default:
      "El Mouslim Digital Marketing | Marketing, Web, SaaS and Cloud Solutions",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "El Mouslim Digital Marketing provides Google Ads, web development, mobile applications, SaaS platforms, cloud infrastructure, cybersecurity, and digital subscription services in Alexandria, Egypt.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title:
      "El Mouslim Digital Marketing | Marketing, Web, SaaS and Cloud Solutions",
    description:
      "Integrated Google Ads, software, SaaS, cloud infrastructure, cybersecurity, and digital subscription solutions.",
    images: [
      {
        url: "/images/about-neon.webp",
        width: 1200,
        height: 630,
        alt: "El Mouslim Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "El Mouslim Digital Marketing | Marketing, Web, SaaS and Cloud Solutions",
    description:
      "Integrated marketing, software, SaaS, cloud, and technical support services in Alexandria, Egypt.",
    images: ["/images/about-neon.webp"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: siteConfig.name,
              url: siteConfig.domain,
              email: siteConfig.email,
              telephone: siteConfig.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Alexandria",
                addressRegion: "Alexandria",
                addressCountry: "EG",
                streetAddress: "El Syouf",
              },
              sameAs: [siteConfig.facebook],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
