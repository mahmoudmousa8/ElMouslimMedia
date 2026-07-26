import type { Metadata } from "next";
import { ContactPage } from "../inner-pages";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact El Mouslim Digital Marketing in El Syouf, Alexandria, Egypt by phone, WhatsApp, Facebook, or email.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
