import type { Metadata } from "next";
import { AboutPage } from "../inner-pages";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet El Mouslim Digital Marketing, an Alexandria-based digital solutions company connecting marketing, software, infrastructure, and support.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
