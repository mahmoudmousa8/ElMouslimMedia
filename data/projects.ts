export type Project = {
  title: string;
  slug: string;
  category: "Websites" | "Google Ads & Marketing" | "App Development";
  shortDescription: string;
  technologies: string[];
  image?: string;
  projectUrl?: string;
  results?: string[];
  caseStudy?: string;
  published: boolean;
  sample: boolean;
  code: string;
  tone: string;
};

export const projects: Project[] = [
  {
    title: "Orient Digital - YouTube Channels Management SaaS",
    slug: "orient-digital",
    category: "App Development",
    shortDescription: "Enterprise SaaS platform for managing YouTube channels, creator revenue share, automated monthly payouts, and financial analytics.",
    technologies: ["React / Next.js", "Node.js", "YouTube API", "SaaS Architecture"],
    image: "/images/projects/orient-digital.webp",
    published: true,
    sample: false,
    code: "OD",
    tone: "gold",
  },
  {
    title: "Qaff Streamer - Live Streaming Management System",
    slug: "qaff-streamer",
    category: "App Development",
    shortDescription: "High-performance live streaming SaaS for content creators, broadcast scheduling, multi-platform streaming, and analytics.",
    technologies: ["WebRTC / Streaming", "Real-Time Systems", "SaaS Platform"],
    image: "/images/projects/qaff-streamer.webp",
    projectUrl: "https://streamer.qaff.net/",
    published: true,
    sample: false,
    code: "QS",
    tone: "amber",
  },
  {
    title: "Al Khatib Law Firm & Legal Consultants",
    slug: "alkhatib-law",
    category: "Websites",
    shortDescription: "Legal advocacy, corporate law, litigation, and advisory firm platform in Saudi Arabia.",
    technologies: ["WordPress", "Legal SEO", "Responsive Web"],
    image: "/images/projects/alkhatib-law.webp",
    projectUrl: "https://alkhatiblawfirm.com/",
    published: true,
    sample: false,
    code: "AK",
    tone: "gold",
  },
  {
    title: "Nouthair Beauty & Personal Care Store",
    slug: "nouthair-store",
    category: "Websites",
    shortDescription: "Specialized online cosmetics, haircare, and personal care e-commerce platform with fast checkout.",
    technologies: ["E-Commerce", "Payment Gateways", "Shopping Cart"],
    image: "/images/projects/nouthair-store.webp",
    projectUrl: "https://nouthair.com/",
    published: true,
    sample: false,
    code: "NS",
    tone: "amber",
  },
  {
    title: "Elite Business & E-Commerce Web Portal",
    slug: "elite-enterprise-portal",
    category: "Websites",
    shortDescription: "High-performance custom web platform engineered for business management, listings, and customer orders.",
    technologies: ["TypeScript", "E-Commerce", "UI/UX Design"],
    image: "/images/projects/custom-platform.webp",
    projectUrl: "https://darkviolet-locust-293091.hostingersite.com/",
    published: true,
    sample: false,
    code: "EP",
    tone: "steel",
  },
  {
    title: "Qaff Digital Corporate Website",
    slug: "qaff-digital",
    category: "Websites",
    shortDescription: "Corporate website for digital services, cloud infrastructure, and technical agency operations.",
    technologies: ["TypeScript", "Responsive Web", "UI/UX Design"],
    image: "/images/projects/qaff-digital.webp",
    projectUrl: "https://digital.qaff.net/",
    published: true,
    sample: false,
    code: "QD",
    tone: "steel",
  },
  {
    title: "Kanaf Real Estate Corporate Platform",
    slug: "kanaf-realestate",
    category: "Websites",
    shortDescription: "Real estate development and property management platform in Saudi Arabia with custom listing showcases.",
    technologies: ["WordPress", "Real Estate SEO", "UI/UX Design"],
    image: "/images/projects/kanaf-realestate.webp",
    projectUrl: "https://kanaf.com.sa/",
    published: true,
    sample: false,
    code: "KR",
    tone: "amber",
  },
  {
    title: "Advance KSA Technical & Business Services",
    slug: "advance-ksa",
    category: "Websites",
    shortDescription: "Corporate portal providing technical consulting, business solutions, and administrative services in KSA.",
    technologies: ["TypeScript", "Corporate Web", "Responsive Design"],
    image: "/images/projects/advance-ksa.webp",
    projectUrl: "https://advanceksa.com/ar/",
    published: true,
    sample: false,
    code: "AK",
    tone: "steel",
  },
  {
    title: "Al Jasir Certified Public Accountants",
    slug: "aljasir-cpa",
    category: "Websites",
    shortDescription: "Corporate website providing financial auditing, tax consulting, and accounting services in Saudi Arabia.",
    technologies: ["WordPress", "Financial SEO", "Responsive Web"],
    image: "/images/projects/aljasir-cpa.webp",
    projectUrl: "https://aljasircpa.com/",
    published: true,
    sample: false,
    code: "AJ",
    tone: "gold",
  },
  {
    title: "Osos Al Murafe'aa Law & Legal Consultancy",
    slug: "osos-law",
    category: "Websites",
    shortDescription: "Integrated legal consulting platform for judicial litigation, contract drafting, and corporate advisory.",
    technologies: ["WordPress", "Legal SEO", "UI/UX Design"],
    image: "/images/projects/osos-law.webp",
    projectUrl: "https://osos-law.com/",
    published: true,
    sample: false,
    code: "OL",
    tone: "steel",
  },

  {
    title: "Google Ads Performance Campaigns",
    slug: "google-ads-campaigns",
    category: "Google Ads & Marketing",
    shortDescription: "Search, Display, and Performance Max advertising campaigns structured for high ROI and conversion tracking.",
    technologies: ["Google Ads", "Google Analytics 4", "Conversion Tracking"],
    image: "/images/projects/google-ads-campaigns.webp",
    published: true,
    sample: false,
    code: "GA",
    tone: "amber",
  },
  {
    title: "Paid Social Media Advertising (Meta, TikTok, Snapchat, X)",
    slug: "social-ads-campaigns",
    category: "Google Ads & Marketing",
    shortDescription: "Targeted paid customer acquisition and conversion campaigns across Meta, TikTok, Snapchat, and X.",
    technologies: ["Meta Ads", "TikTok Ads", "Snapchat Ads", "X Ads"],
    image: "/images/projects/meta-ads-campaigns.webp",
    published: true,
    sample: false,
    code: "SA",
    tone: "steel",
  },
];

export const portfolioCategories = [
  "All",
  ...Array.from(
    new Set(
      projects
        .filter((project) => project.published)
        .map((project) => project.category),
    ),
  ),
];
