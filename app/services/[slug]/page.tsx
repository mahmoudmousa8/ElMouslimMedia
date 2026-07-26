import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getService, services } from "../../../data/services";
import { siteConfig } from "../../../data/site-config";
import { ServiceDetailPage } from "../../inner-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      type: "website",
      url: `${siteConfig.domain}/services/${service.slug}`,
      title: `${service.name} | ${siteConfig.name}`,
      description: service.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (slug === "media-production") redirect("/services");

  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceDetailPage slug={slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            url: `${siteConfig.domain}/services/${service.slug}`,
            provider: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.domain,
            },
            areaServed: {
              "@type": "Country",
              name: "Egypt",
            },
          }),
        }}
      />
    </>
  );
}

