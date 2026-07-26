import type { Metadata } from "next";
import { WorkPage } from "../inner-pages";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore the editable El Mouslim Digital Marketing portfolio structure for websites, app development, and Google Ads.",
  alternates: {
    canonical: "/our-work",
  },
};

export default function Page() {
  return <WorkPage />;
}
