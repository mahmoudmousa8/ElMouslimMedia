import type { Metadata } from "next";
import { siteConfig } from "../../data/site-config";
import { PageLayout } from "../inner-pages";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `General website and service terms for ${siteConfig.name}.`,
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function Page() {
  return (
    <PageLayout
      active=""
      kicker="LEGAL"
      title="Terms and Conditions"
      intro="General information governing use of this website and requests for services or digital subscriptions."
      compact
    >
      <article className="inner-section legal-page">
        <h2>Website information</h2>
        <p>
          Website content describes available capabilities and current offers.
          A project, service, or order becomes confirmed only after scope,
          availability, price, payment, and delivery terms are agreed through an
          official communication channel.
        </p>
        <h2>Demonstration portfolio content</h2>
        <p>
          Neutral demonstration cards on the Our Work page show the intended
          portfolio structure. They do not represent client claims or published
          performance results.
        </p>
        <h2>Third-party products</h2>
        <p>
          Third-party company names, product names, and trademarks belong to
          their respective owners. Availability and product features may depend
          on the third-party provider.
        </p>
        <h2>Contact</h2>
        <p>
          Questions can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </article>
    </PageLayout>
  );
}

