export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  primaryCategory: string;
  description: string;
  overview: string;
  problems: string[];
  capabilities: string[];
  process: ServiceProcessStep[];
  technologies: string[];
  relatedSlugs: string[];
};

type ServiceInput = Pick<
  Service,
  | "slug"
  | "name"
  | "short"
  | "primaryCategory"
  | "description"
  | "capabilities"
> &
  Partial<
    Pick<
      Service,
      "overview" | "problems" | "process" | "technologies" | "relatedSlugs"
    >
  >;

const standardProcess: ServiceProcessStep[] = [
  {
    title: "Discovery",
    description:
      "We clarify the business goal, users, current setup, constraints, and success criteria.",
  },
  {
    title: "Planning",
    description:
      "We define scope, priorities, responsibilities, milestones, and the most practical delivery path.",
  },
  {
    title: "Execution",
    description:
      "Our team builds, configures, or launches the solution with clear progress communication.",
  },
  {
    title: "Review & Improvement",
    description:
      "We validate the result, document the handover, and identify the next useful improvements.",
  },
];

function createService(input: ServiceInput): Service {
  return {
    ...input,
    overview:
      input.overview ??
      `${input.name} is delivered as a practical, business-focused service. We connect planning, implementation, quality control, and ongoing support so the result is useful today and ready to grow.`,
    problems: input.problems ?? [
      `An unclear or fragmented approach to ${input.name.toLowerCase()}.`,
      "Limited visibility into priorities, ownership, and performance.",
      "A setup that is difficult to maintain, improve, or scale.",
    ],
    process: input.process ?? standardProcess,
    technologies: input.technologies ?? [],
    relatedSlugs: input.relatedSlugs ?? [],
  };
}

export const services: Service[] = [
  createService({
    slug: "google-ads",
    name: "Google Ads",
    short: "GA",
    primaryCategory: "digital-marketing-growth",
    description:
      "Intent-led campaigns across Search, Display, Performance Max, and YouTube, built around measurable business goals.",
    capabilities: [
      "Account and conversion audit",
      "Campaign architecture",
      "Keyword and audience research",
      "Creative and landing-page guidance",
      "Remarketing",
      "Budget and bid optimization",
      "Clear performance reporting",
    ],
    technologies: ["Google Ads", "Google Analytics 4", "Google Tag Manager"],
    relatedSlugs: ["digital-strategy", "website-development", "search-engine-optimization"],
  }),
  createService({
    slug: "social-media-management",
    name: "Social Media Management",
    short: "SM",
    primaryCategory: "digital-marketing-growth",
    description:
      "Planning, publishing, community workflows, and campaign coordination for a consistent social presence.",
    capabilities: [
      "Channel planning",
      "Content calendars",
      "Creative direction",
      "Community workflows",
      "Campaign coordination",
      "Monthly reporting",
    ],
    relatedSlugs: ["digital-strategy", "branding", "google-ads"],
  }),
  createService({
    slug: "search-engine-optimization",
    name: "Search Engine Optimization",
    short: "SEO",
    primaryCategory: "digital-marketing-growth",
    description:
      "Technical, content, and authority improvements that strengthen qualified organic visibility over time.",
    capabilities: [
      "Technical SEO audits",
      "Keyword research",
      "Information architecture",
      "On-page optimization",
      "Content briefs",
      "Internal linking",
      "Search performance reporting",
    ],
    technologies: ["Google Search Console", "Google Analytics 4", "Schema.org"],
    relatedSlugs: ["website-development", "performance-optimization", "digital-strategy"],
  }),
  createService({
    slug: "digital-strategy",
    name: "Digital Strategy",
    short: "DS",
    primaryCategory: "digital-marketing-growth",
    description:
      "A clear digital roadmap connecting audiences, channels, content, technology, and commercial priorities.",
    capabilities: [
      "Business and audience analysis",
      "Customer-journey mapping",
      "Channel planning",
      "Measurement framework",
      "Campaign roadmap",
      "Execution priorities",
    ],
    relatedSlugs: ["google-ads", "social-media-management", "product-development"],
  }),
  createService({
    slug: "branding",
    name: "Branding",
    short: "BR",
    primaryCategory: "digital-marketing-growth",
    description:
      "Practical brand foundations and visual systems that stay consistent across digital touchpoints.",
    capabilities: [
      "Brand positioning",
      "Visual direction",
      "Logo-system guidance",
      "Color and typography systems",
      "Digital brand guidelines",
      "Reusable templates",
    ],
    relatedSlugs: ["ui-ux-design", "digital-strategy", "brand-trademark-protection"],
  }),
  createService({
    slug: "brand-trademark-protection",
    name: "Brand and Trademark Protection",
    short: "BP",
    primaryCategory: "digital-marketing-growth",
    description:
      "Digital brand monitoring, impersonation-response support, and organized evidence workflows for protecting brand identity.",
    capabilities: [
      "Digital brand audits",
      "Impersonation evidence organization",
      "Platform-reporting support",
      "Brand-use guidelines",
      "Escalation documentation",
      "Monitoring recommendations",
    ],
    relatedSlugs: ["branding", "cybersecurity", "technical-consulting"],
  }),
  createService({
    slug: "website-development",
    name: "Website Development",
    short: "WD",
    primaryCategory: "web-mobile-saas",
    description:
      "Fast, responsive, accessible websites shaped around the customer journey and the actions that matter.",
    capabilities: [
      "Corporate websites",
      "Landing pages",
      "Multilingual websites",
      "CMS integration",
      "Analytics setup",
      "Technical SEO foundations",
      "Responsive quality assurance",
    ],
    technologies: ["WordPress", "Next.js", "React", "TypeScript", "Cloudflare"],
    relatedSlugs: ["ui-ux-design", "cms-development", "website-maintenance"],
  }),
  createService({
    slug: "e-commerce-development",
    name: "E-commerce Development",
    short: "EC",
    primaryCategory: "web-mobile-saas",
    description:
      "Conversion-focused online stores with structured catalogues, checkout flows, payments, and operational integrations.",
    capabilities: [
      "Store architecture",
      "Product catalogue setup",
      "Checkout optimization",
      "Payment integrations",
      "Shipping workflows",
      "Analytics and conversion tracking",
      "Store maintenance planning",
    ],
    technologies: ["WooCommerce", "Shopify", "WordPress", "Payment APIs"],
    relatedSlugs: ["website-development", "system-integration", "performance-optimization"],
  }),
  createService({
    slug: "web-application-development",
    name: "Web Application Development",
    short: "WA",
    primaryCategory: "web-mobile-saas",
    description:
      "Secure browser-based products, portals, dashboards, and operational systems built for real workflows.",
    capabilities: [
      "Product discovery",
      "User portals",
      "Administrative dashboards",
      "Workflow automation",
      "API integration",
      "Reporting",
      "Testing and deployment",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "SQL"],
    relatedSlugs: ["custom-software-development", "ui-ux-design", "system-integration"],
  }),
  createService({
    slug: "custom-software-development",
    name: "Custom Software Development",
    short: "CS",
    primaryCategory: "web-mobile-saas",
    description:
      "Purpose-built software designed around the processes, permissions, data, and integrations your business needs.",
    capabilities: [
      "Requirements analysis",
      "Solution architecture",
      "Business workflow systems",
      "API development",
      "Role and permission models",
      "Testing",
      "Deployment and documentation",
    ],
    technologies: ["TypeScript", "Node.js", "SQL", "REST APIs", "Cloud platforms"],
    relatedSlugs: ["web-application-development", "system-integration", "technical-consulting"],
  }),
  createService({
    slug: "mobile-app-development",
    name: "Mobile App Development",
    short: "MA",
    primaryCategory: "web-mobile-saas",
    description:
      "Mobile products designed for clear user journeys, stable performance, maintainable releases, and future growth.",
    capabilities: [
      "Product planning",
      "iOS and Android experience design",
      "Cross-platform development",
      "Backend and API integration",
      "Push notifications",
      "Testing and release support",
    ],
    technologies: ["React Native", "Flutter", "REST APIs", "Cloud services"],
    relatedSlugs: ["ui-ux-design", "mvp-development", "application-maintenance"],
  }),
  createService({
    slug: "saas-systems-development",
    name: "SaaS Systems Development",
    short: "SAAS",
    primaryCategory: "web-mobile-saas",
    description:
      "Scalable Software-as-a-Service platforms with secure access, subscriptions, dashboards, APIs, reporting, and cloud-ready architecture.",
    overview:
      "We design and develop scalable Software-as-a-Service platforms with secure user management, subscription systems, administrative dashboards, APIs, payment integrations, reporting tools, and cloud-ready architecture. The product structure is planned for maintainability, operational visibility, and controlled growth.",
    problems: [
      "A software idea has no clear product architecture or delivery roadmap.",
      "User access, plans, billing, and permissions are handled manually.",
      "The current system cannot support multiple customers securely.",
      "Reporting, notifications, integrations, or administration are fragmented.",
    ],
    capabilities: [
      "User registration and authentication",
      "Role and permission management",
      "Subscription plans",
      "Recurring billing integrations",
      "Customer dashboards",
      "Administrative dashboards",
      "API development",
      "Multi-tenant architecture",
      "Analytics and reporting",
      "Notifications",
      "Cloud deployment",
      "Security and backups",
    ],
    process: [
      {
        title: "Product Discovery",
        description:
          "We map users, jobs to be done, plans, permissions, workflows, and the minimum viable release.",
      },
      {
        title: "Architecture",
        description:
          "We define tenancy, data structure, security boundaries, APIs, billing, and cloud deployment.",
      },
      {
        title: "Iterative Development",
        description:
          "We deliver the product in testable milestones with customer and administration experiences developed together.",
      },
      {
        title: "Launch & Scale",
        description:
          "We validate security, backups, observability, performance, documentation, and the release process.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "SQL",
      "Payment APIs",
      "Cloudflare",
    ],
    relatedSlugs: ["mvp-development", "product-development", "cloud-management"],
  }),
  createService({
    slug: "ui-ux-design",
    name: "UI/UX Design",
    short: "UX",
    primaryCategory: "web-mobile-saas",
    description:
      "Research-led interfaces and flows that make digital products clearer, more consistent, and easier to use.",
    capabilities: [
      "User-flow mapping",
      "Information architecture",
      "Wireframes",
      "Interface design",
      "Design systems",
      "Responsive prototypes",
      "Developer handoff",
    ],
    technologies: ["Figma", "Design systems", "Accessibility standards"],
    relatedSlugs: ["website-development", "mobile-app-development", "product-development"],
  }),
  createService({
    slug: "cms-development",
    name: "CMS Development",
    short: "CMS",
    primaryCategory: "web-mobile-saas",
    description:
      "Flexible content-management systems that let teams update structured website content safely and efficiently.",
    capabilities: [
      "Content modelling",
      "Editorial workflows",
      "Custom content types",
      "Permissions",
      "Multilingual content",
      "API-driven content",
      "Editor training",
    ],
    technologies: ["WordPress", "Headless CMS", "REST APIs"],
    relatedSlugs: ["website-development", "software-localization", "training"],
  }),
  createService({
    slug: "mvp-development",
    name: "MVP Development",
    short: "MVP",
    primaryCategory: "web-mobile-saas",
    description:
      "Focused product releases that test the most important customer and business assumptions without unnecessary scope.",
    capabilities: [
      "Scope definition",
      "Prototype validation",
      "Core user journeys",
      "Lean architecture",
      "Release planning",
      "Measurement setup",
      "Post-launch roadmap",
    ],
    relatedSlugs: ["product-development", "saas-systems-development", "ui-ux-design"],
  }),
  createService({
    slug: "product-development",
    name: "Product Development",
    short: "PD",
    primaryCategory: "web-mobile-saas",
    description:
      "End-to-end digital product planning and delivery, from discovery and design through launch and continuous improvement.",
    capabilities: [
      "Product discovery",
      "Roadmap planning",
      "Experience design",
      "Technical architecture",
      "Development",
      "Quality assurance",
      "Iteration planning",
    ],
    relatedSlugs: ["mvp-development", "ui-ux-design", "custom-software-development"],
  }),
  createService({
    slug: "system-integration",
    name: "System Integration",
    short: "SI",
    primaryCategory: "web-mobile-saas",
    description:
      "Reliable connections between websites, applications, CRMs, payments, data sources, and operational tools.",
    capabilities: [
      "Integration discovery",
      "API design and connection",
      "Data mapping",
      "Authentication flows",
      "Webhook workflows",
      "Error handling",
      "Monitoring and documentation",
    ],
    technologies: ["REST APIs", "Webhooks", "OAuth", "SQL", "Automation platforms"],
    relatedSlugs: ["custom-software-development", "cloud-migration", "technical-consulting"],
  }),
  createService({
    slug: "cpanel-hosting",
    name: "cPanel Hosting",
    short: "CP",
    primaryCategory: "cloud-infrastructure-security",
    description:
      "Managed cPanel environments for business websites, email, SSL, backups, and day-to-day hosting administration.",
    capabilities: [
      "Hosting setup",
      "Domain and DNS support",
      "SSL configuration",
      "Email configuration",
      "Backup scheduling",
      "Resource monitoring",
      "Migration support",
    ],
    technologies: ["cPanel", "WHM", "Linux", "DNS", "SSL"],
    relatedSlugs: ["server-management", "website-maintenance", "backup-data-recovery"],
  }),
  createService({
    slug: "server-management",
    name: "Server Management",
    short: "SV",
    primaryCategory: "cloud-infrastructure-security",
    description:
      "Configuration, monitoring, patching, performance, and operational support for business servers.",
    capabilities: [
      "Server provisioning",
      "System updates",
      "Resource monitoring",
      "Security hardening",
      "Service troubleshooting",
      "Backup coordination",
      "Operational documentation",
    ],
    technologies: ["Linux", "Proxmox", "Docker", "Web servers", "Monitoring tools"],
    relatedSlugs: ["cybersecurity", "backup-data-recovery", "performance-optimization"],
  }),
  createService({
    slug: "cloud-management",
    name: "Cloud Management",
    short: "CM",
    primaryCategory: "cloud-infrastructure-security",
    description:
      "Structured cloud operations covering availability, access, cost visibility, security, backups, and deployment.",
    capabilities: [
      "Cloud architecture review",
      "Access management",
      "Resource organization",
      "Deployment workflows",
      "Monitoring",
      "Cost visibility",
      "Backup planning",
    ],
    technologies: ["Cloudflare", "AWS", "Google Cloud", "Azure", "Docker"],
    relatedSlugs: ["cloud-migration", "infrastructure-setup", "cybersecurity"],
  }),
  createService({
    slug: "cloud-migration",
    name: "Cloud Migration",
    short: "CL",
    primaryCategory: "cloud-infrastructure-security",
    description:
      "Planned migration of applications, websites, databases, and workloads with controlled risk and downtime.",
    capabilities: [
      "Current-state assessment",
      "Target architecture",
      "Dependency mapping",
      "Data migration",
      "Cutover planning",
      "Rollback planning",
      "Post-migration validation",
    ],
    technologies: ["Cloud platforms", "Containers", "Databases", "DNS", "CDN"],
    relatedSlugs: ["technology-migration", "cloud-management", "backup-data-recovery"],
  }),
  createService({
    slug: "technology-migration",
    name: "Technology Migration",
    short: "TM",
    primaryCategory: "cloud-infrastructure-security",
    description:
      "Careful movement from outdated or unsuitable technology to a maintainable platform with documented continuity.",
    capabilities: [
      "Platform assessment",
      "Migration roadmap",
      "Data and content mapping",
      "Compatibility planning",
      "Phased implementation",
      "Validation",
      "Handover documentation",
    ],
    relatedSlugs: ["cloud-migration", "software-localization", "system-integration"],
  }),
  createService({
    slug: "infrastructure-setup",
    name: "Infrastructure Setup",
    short: "IS",
    primaryCategory: "cloud-infrastructure-security",
    description:
      "Reliable foundations for applications and business systems, including environments, access, networking, and deployment.",
    capabilities: [
      "Environment design",
      "Server and cloud setup",
      "Network and DNS configuration",
      "Access controls",
      "Deployment setup",
      "Monitoring",
      "Documentation",
    ],
    technologies: ["Linux", "Cloud platforms", "Docker", "DNS", "CI/CD"],
    relatedSlugs: ["server-management", "cloud-management", "cybersecurity"],
  }),
  createService({
    slug: "cybersecurity",
    name: "Cybersecurity",
    short: "CY",
    primaryCategory: "cloud-infrastructure-security",
    description:
      "Practical security improvements for websites, systems, access, data, backups, and operational processes.",
    capabilities: [
      "Security assessment",
      "Access review",
      "Security hardening",
      "Vulnerability remediation guidance",
      "Backup controls",
      "Incident-response preparation",
      "Security documentation",
    ],
    relatedSlugs: ["server-management", "backup-data-recovery", "brand-trademark-protection"],
  }),
  createService({
    slug: "backup-data-recovery",
    name: "Backup and Data Recovery",
    short: "BD",
    primaryCategory: "cloud-infrastructure-security",
    description:
      "Backup strategies, restore testing, retention planning, and recovery workflows designed around business continuity.",
    capabilities: [
      "Backup assessment",
      "Retention planning",
      "Automated backup setup",
      "Off-site copies",
      "Restore testing",
      "Recovery documentation",
      "Ongoing checks",
    ],
    technologies: ["Cloud storage", "Database backups", "Server snapshots"],
    relatedSlugs: ["server-management", "cloud-management", "cybersecurity"],
  }),
  createService({
    slug: "database-optimization",
    name: "Database Optimization",
    short: "DB",
    primaryCategory: "cloud-infrastructure-security",
    description:
      "Database analysis and improvements for queries, indexes, reliability, storage, and application responsiveness.",
    capabilities: [
      "Query analysis",
      "Index review",
      "Schema review",
      "Storage planning",
      "Slow-query remediation",
      "Backup review",
      "Monitoring guidance",
    ],
    technologies: ["PostgreSQL", "MySQL", "SQLite", "SQL"],
    relatedSlugs: ["performance-optimization", "server-management", "custom-software-development"],
  }),
  createService({
    slug: "performance-optimization",
    name: "Performance Optimization",
    short: "PO",
    primaryCategory: "cloud-infrastructure-security",
    description:
      "Evidence-led improvements to website, application, server, and database speed for a smoother customer experience.",
    capabilities: [
      "Performance audit",
      "Core Web Vitals review",
      "Asset optimization",
      "Caching strategy",
      "Server tuning",
      "Database review",
      "Ongoing measurement",
    ],
    technologies: ["PageSpeed Insights", "Web performance tooling", "CDN", "Caching"],
    relatedSlugs: ["database-optimization", "website-development", "server-management"],
  }),
  createService({
    slug: "bug-fixing-maintenance",
    name: "Bug Fixing and Maintenance",
    short: "BF",
    primaryCategory: "technical-support-enablement",
    description:
      "Structured diagnosis, repair, testing, and maintenance for digital products that need dependable operation.",
    capabilities: [
      "Issue reproduction",
      "Root-cause diagnosis",
      "Bug fixing",
      "Regression testing",
      "Dependency maintenance",
      "Release support",
      "Maintenance reporting",
    ],
    relatedSlugs: ["website-maintenance", "application-maintenance", "technical-consulting"],
  }),
  createService({
    slug: "technical-consulting",
    name: "Technical Consulting",
    short: "TC",
    primaryCategory: "technical-support-enablement",
    description:
      "Independent technical guidance for architecture, vendors, roadmaps, risks, migrations, and delivery decisions.",
    capabilities: [
      "Technical assessments",
      "Architecture review",
      "Vendor evaluation",
      "Risk analysis",
      "Roadmap planning",
      "Delivery oversight",
      "Decision documentation",
    ],
    relatedSlugs: ["system-integration", "technology-migration", "training"],
  }),
  createService({
    slug: "training",
    name: "Training",
    short: "TR",
    primaryCategory: "technical-support-enablement",
    description:
      "Practical, role-based training that helps teams use, administer, and improve their digital systems confidently.",
    capabilities: [
      "Training-needs assessment",
      "Custom learning plans",
      "Administrator training",
      "Editor training",
      "Operational playbooks",
      "Live workshops",
      "Follow-up support",
    ],
    relatedSlugs: ["technical-consulting", "cms-development", "remote-development-teams"],
  }),
  createService({
    slug: "remote-development-teams",
    name: "Remote Development Teams",
    short: "RT",
    primaryCategory: "technical-support-enablement",
    description:
      "Flexible development capacity with clear roles, communication, delivery rhythms, and technical ownership.",
    capabilities: [
      "Role and skill planning",
      "Team extension",
      "Delivery management",
      "Code review",
      "Quality assurance",
      "Documentation",
      "Capacity scaling",
    ],
    relatedSlugs: ["product-development", "custom-software-development", "technical-consulting"],
  }),
  createService({
    slug: "software-localization",
    name: "Software Localization",
    short: "SL",
    primaryCategory: "technical-support-enablement",
    description:
      "Language, layout, content, and regional adaptation for products serving Arabic and international users.",
    capabilities: [
      "Localization planning",
      "Arabic and English interfaces",
      "RTL and LTR support",
      "Content migration",
      "Locale-aware formatting",
      "Translation workflow setup",
      "Localization quality assurance",
    ],
    technologies: ["Internationalization frameworks", "CMS", "Unicode", "RTL CSS"],
    relatedSlugs: ["cms-development", "ui-ux-design", "technology-migration"],
  }),
  createService({
    slug: "website-maintenance",
    name: "Website Maintenance",
    short: "WM",
    primaryCategory: "technical-support-enablement",
    description:
      "Ongoing updates, monitoring, backups, fixes, and small improvements that keep business websites dependable.",
    capabilities: [
      "Platform updates",
      "Content support",
      "Uptime checks",
      "Backup checks",
      "Security maintenance",
      "Bug fixes",
      "Performance reviews",
    ],
    relatedSlugs: ["bug-fixing-maintenance", "cpanel-hosting", "performance-optimization"],
  }),
  createService({
    slug: "application-maintenance",
    name: "Application Maintenance",
    short: "AM",
    primaryCategory: "technical-support-enablement",
    description:
      "Planned technical care for web and mobile applications, covering stability, releases, security, and improvement.",
    capabilities: [
      "Issue triage",
      "Dependency updates",
      "Release management",
      "Monitoring",
      "Security patches",
      "Performance fixes",
      "Technical backlog planning",
    ],
    relatedSlugs: ["bug-fixing-maintenance", "mobile-app-development", "web-application-development"],
  }),
];

export const serviceCategories = [
  {
    id: "digital-marketing-growth",
    name: "Digital Marketing & Growth",
    short: "GROWTH",
    description:
      "Connected strategy and acquisition services that turn attention into measurable demand.",
    serviceSlugs: [
      "google-ads",
      "social-media-management",
      "search-engine-optimization",
      "digital-strategy",
      "branding",
      "brand-trademark-protection",
    ],
  },
  {
    id: "web-mobile-saas",
    name: "Web, Mobile & SaaS Development",
    short: "BUILD",
    description:
      "Scalable websites, applications, products, and platforms designed around real business workflows.",
    serviceSlugs: [
      "website-development",
      "e-commerce-development",
      "web-application-development",
      "custom-software-development",
      "mobile-app-development",
      "saas-systems-development",
      "ui-ux-design",
      "cms-development",
      "mvp-development",
      "product-development",
      "system-integration",
    ],
  },
  {
    id: "cloud-infrastructure-security",
    name: "Cloud, Infrastructure & Security",
    short: "RUN",
    description:
      "Reliable infrastructure, migrations, security, backups, and performance for business-critical systems.",
    serviceSlugs: [
      "cpanel-hosting",
      "server-management",
      "cloud-management",
      "cloud-migration",
      "technology-migration",
      "infrastructure-setup",
      "cybersecurity",
      "backup-data-recovery",
      "database-optimization",
      "performance-optimization",
    ],
  },
  {
    id: "technical-support-enablement",
    name: "Technical Support & Business Enablement",
    short: "SUPPORT",
    description:
      "Practical expertise that helps teams maintain, improve, localize, and operate their technology.",
    serviceSlugs: [
      "bug-fixing-maintenance",
      "technical-consulting",
      "training",
      "remote-development-teams",
      "software-localization",
      "system-integration",
      "website-maintenance",
      "application-maintenance",
    ],
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(categoryId: string) {
  const category = serviceCategories.find((item) => item.id === categoryId);
  if (!category) return [];
  return category.serviceSlugs
    .map((slug) => getService(slug))
    .filter((service): service is Service => Boolean(service));
}

