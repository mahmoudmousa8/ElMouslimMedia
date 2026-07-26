import type { Metadata } from "next";
import { BlogsPage } from "../inner-pages";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Original English articles about Google Ads, websites, SaaS, cloud infrastructure, performance, cybersecurity, and digital strategy.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return <BlogsPage />;
}

