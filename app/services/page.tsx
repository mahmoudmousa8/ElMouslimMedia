import type { Metadata } from "next";
import { ServicesPage } from "../inner-pages";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Google Ads, web and mobile development, SaaS systems, cloud infrastructure, cybersecurity, and technical support services.",
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
