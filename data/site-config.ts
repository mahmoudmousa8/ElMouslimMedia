export const siteConfig = {
  name: "El Mouslim Digital Marketing",
  brandName: "ElMouslim",
  brandDescriptor: "DIGITAL MARKETING",
  domain: "https://elmouslim.net",
  phone: "+20 120 541 2025",
  localPhone: "01205412025",
  phoneHref: "tel:+201205412025",
  whatsappNumber: "201205412025",
  whatsappHref: "https://wa.me/201205412025",
  email: "info@elmouslim.net",
  location: "Egypt – Alexandria – El Syouf",
  workingHours: "Sunday – Thursday, 9:00 AM – 5:00 PM",
  facebook:
    "https://www.facebook.com/TheMuslimForDigitalMarketing/",
  description:
    "El Mouslim Digital Marketing provides integrated digital marketing, software development, cloud infrastructure, and subscription solutions for businesses.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/our-work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export function whatsappLink(message: string) {
  return `${siteConfig.whatsappHref}?text=${encodeURIComponent(message)}`;
}

