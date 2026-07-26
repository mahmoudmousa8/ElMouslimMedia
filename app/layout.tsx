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
    "El Mouslim Digital Marketing provides Google Ads, web development, mobile applications, SaaS platforms, cloud infrastructure, cybersecurity, and digital subscription services in Saudi Arabia and the MENA region.",
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
      "Integrated Google Ads, custom web software, SaaS platforms, cloud infrastructure, cybersecurity, and performance advertising.",
    images: [
      {
        url: "/images/og-share.png",
        width: 1200,
        height: 630,
        alt: "المسلم للتسويق الإلكتروني - El Mouslim Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "El Mouslim Digital Marketing | Marketing, Web, SaaS and Cloud Solutions",
    description:
      "Integrated Google Ads, software, SaaS platforms, cloud infrastructure, and technical agency services.",
    images: ["/images/og-share.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: siteConfig.name,
              url: siteConfig.domain,
              logo: `${siteConfig.domain}/logo.png`,
              image: `${siteConfig.domain}/images/og-share.png`,
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
