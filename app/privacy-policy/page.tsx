import type { Metadata } from "next";
import { siteConfig } from "../../data/site-config";
import { PageLayout } from "../inner-pages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy information for ${siteConfig.name}.`,
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Page() {
  return (
    <PageLayout
      active=""
      kicker="LEGAL"
      title="Privacy Policy"
      intro="How contact information is handled when you choose to communicate with El Mouslim Digital Marketing."
      compact
    >
      <article className="inner-section legal-page">
        <h2>Information you choose to share</h2>
        <p>
          This website does not store contact-form submissions in a website
          database. Contact and order buttons prepare a message for WhatsApp or
          your email application, where you choose whether to send it.
        </p>
        <h2>Communication records</h2>
        <p>
          If you contact us, the information you send may be retained within
          the relevant communication service for customer support, project
          discussion, order coordination, and legitimate business records.
        </p>
        <h2>Private payment information</h2>
        <p>
          Bank, wallet, and payment credentials are not published on this
          website. Do not send passwords, private keys, or unnecessary sensitive
          information through a public form.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </article>
    </PageLayout>
  );
}

