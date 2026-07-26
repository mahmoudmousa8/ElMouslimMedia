export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  displayDate: string;
  readingTime: string;
  content: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-google-ads-helps-businesses-grow",
    title: "How Google Ads Helps Businesses Grow",
    description:
      "A practical look at how Google Ads captures demand, measures actions, and supports sustainable acquisition.",
    excerpt:
      "Google Ads can connect an active customer need with a relevant offer—when targeting, landing pages, and measurement work together.",
    category: "Google Ads",
    publishedAt: "2026-07-20",
    displayDate: "20 JUL 2026",
    readingTime: "5 min read",
    content: [
      {
        heading: "Start with customer intent",
        paragraphs: [
          "Search advertising is most useful when it answers an existing need. Strong campaigns separate high-intent searches from general research and connect each group to the most relevant page.",
          "The objective is not simply to buy more clicks. It is to create a clear path from the search term to the offer, the page, and the action the business wants to measure.",
        ],
      },
      {
        heading: "Measurement changes the quality of decisions",
        paragraphs: [
          "Accurate conversion tracking helps a business understand which campaigns, search themes, locations, and devices create useful outcomes. That evidence makes budget decisions clearer.",
        ],
        bullets: [
          "Define valuable actions before launch",
          "Connect Google Ads with analytics and tag management",
          "Review search terms and landing-page relevance",
          "Improve budgets and bids using business outcomes",
        ],
      },
    ],
  },
  {
    slug: "website-vs-web-application",
    title: "Website vs Web Application: Which Does Your Business Need?",
    description:
      "Understand the difference between an informational website and an interactive web application.",
    excerpt:
      "The right choice depends on what users need to do, how data moves, and how much operational logic the product must support.",
    category: "Web Development",
    publishedAt: "2026-07-14",
    displayDate: "14 JUL 2026",
    readingTime: "6 min read",
    content: [
      {
        heading: "A website communicates; an application performs workflows",
        paragraphs: [
          "A business website usually explains an offer, builds trust, presents content, and generates enquiries or sales. A web application usually adds accounts, permissions, live data, complex forms, dashboards, or repeated operational tasks.",
          "Some projects need both. A public website can introduce the business while a secure application supports customers or staff after sign-in.",
        ],
      },
      {
        heading: "Choose from the business requirement",
        paragraphs: [
          "Start with the customer journey and internal workflow. If the primary need is publishing and conversion, a well-built website may be enough. If users must manage records, collaborate, calculate, or automate processes, an application is usually the stronger fit.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-saas-platform",
    title: "What Is a SaaS Platform?",
    description:
      "An accessible guide to SaaS products, subscriptions, user management, multi-tenancy, and cloud delivery.",
    excerpt:
      "SaaS turns software into an ongoing online service with customer accounts, plans, administration, and continuous updates.",
    category: "SaaS",
    publishedAt: "2026-07-08",
    displayDate: "08 JUL 2026",
    readingTime: "6 min read",
    content: [
      {
        heading: "Software delivered as a service",
        paragraphs: [
          "A SaaS platform is accessed online and operated continuously by its provider. Customers usually create accounts, choose a plan, and use the product without installing and maintaining the underlying infrastructure.",
          "Behind the interface, the platform needs secure identity, permissions, data separation, administration, billing, monitoring, backups, and a reliable release process.",
        ],
      },
      {
        heading: "The product is more than the feature",
        paragraphs: [
          "A successful SaaS product must support the full customer lifecycle—from registration and onboarding to support, upgrades, reporting, and account management.",
        ],
        bullets: [
          "Define the customer and the job the product solves",
          "Build the smallest useful release",
          "Plan permissions and data boundaries early",
          "Measure adoption before expanding the roadmap",
        ],
      },
    ],
  },
  {
    slug: "why-businesses-move-systems-to-cloud",
    title: "Why Businesses Move Their Systems to the Cloud",
    description:
      "Explore the operational reasons businesses migrate systems to managed cloud infrastructure.",
    excerpt:
      "Cloud migration can improve flexibility and operational visibility, but only when dependencies, security, cost, and recovery are planned.",
    category: "Cloud",
    publishedAt: "2026-07-02",
    displayDate: "02 JUL 2026",
    readingTime: "5 min read",
    content: [
      {
        heading: "Cloud is an operating model",
        paragraphs: [
          "Moving to the cloud is not simply copying files to a different server. It is an opportunity to improve how resources are provisioned, secured, monitored, backed up, and changed.",
          "A good migration starts with the current system: its users, data, integrations, traffic patterns, recovery needs, and constraints.",
        ],
      },
      {
        heading: "Plan for continuity",
        paragraphs: [
          "A migration should include testing, rollback options, data validation, DNS planning, access review, and post-launch monitoring. The best target is not always the most complex cloud architecture; it is the one the business can operate reliably.",
        ],
      },
    ],
  },
  {
    slug: "website-speed-and-conversion-rates",
    title: "How Website Speed Affects Conversion Rates",
    description:
      "Learn how loading performance influences customer experience, measurement, and conversion.",
    excerpt:
      "Slow pages add friction before the offer has a chance to persuade. Performance work protects both user experience and campaign efficiency.",
    category: "Performance",
    publishedAt: "2026-06-25",
    displayDate: "25 JUN 2026",
    readingTime: "5 min read",
    content: [
      {
        heading: "Speed shapes the first impression",
        paragraphs: [
          "Visitors make decisions while a page is loading. Delayed content, unstable layouts, and unresponsive controls make the experience feel less trustworthy and increase abandonment.",
          "Performance also affects marketing measurement. If a landing page fails to load smoothly, paid traffic may leave before analytics records a meaningful action.",
        ],
      },
      {
        heading: "Optimize the whole delivery path",
        paragraphs: [
          "Useful performance work looks at images, fonts, scripts, caching, server response, database queries, and third-party tools together.",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity-basics-small-businesses",
    title: "Cybersecurity Basics for Small Businesses",
    description:
      "A practical security baseline covering access, updates, backups, monitoring, and incident readiness.",
    excerpt:
      "Small improvements to access, updates, backups, and team habits can prevent many common business security problems.",
    category: "Cybersecurity",
    publishedAt: "2026-06-18",
    displayDate: "18 JUN 2026",
    readingTime: "6 min read",
    content: [
      {
        heading: "Protect the accounts that control everything else",
        paragraphs: [
          "Email, hosting, domain, cloud, and payment accounts deserve the strongest controls because access to one can lead to several others. Use unique passwords, multi-factor authentication, and clear ownership.",
        ],
        bullets: [
          "Remove access when a role changes",
          "Apply software and platform updates",
          "Keep tested backups outside the main system",
          "Document who to contact and what to do after an incident",
        ],
      },
      {
        heading: "Security is a routine",
        paragraphs: [
          "Security improves when checks become part of normal operations. A short recurring review is more effective than waiting for a problem before identifying owners, backups, and recovery steps.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-digital-marketing-agency",
    title: "How to Choose a Digital Marketing Agency",
    description:
      "Questions that help businesses assess strategy, measurement, communication, and delivery before choosing an agency.",
    excerpt:
      "The strongest partner should explain the plan, connect channels, define measurement, and make responsibilities clear.",
    category: "Strategy",
    publishedAt: "2026-06-10",
    displayDate: "10 JUN 2026",
    readingTime: "5 min read",
    content: [
      {
        heading: "Ask how the work connects",
        paragraphs: [
          "A useful agency should be able to explain how media, content, landing pages, analytics, and follow-up support one customer journey. Separate activities need a shared objective.",
          "Ask what happens before launch, during the month, and after the report. Clear routines reveal how the team turns strategy into consistent execution.",
        ],
      },
      {
        heading: "Make evidence and ownership visible",
        paragraphs: [
          "You should know who owns the accounts, data, creative assets, and website access. Reporting should connect activity to defined outcomes and explain what the team will change next.",
        ],
      },
    ],
  },
  {
    slug: "why-business-needs-digital-strategy",
    title: "Why Your Business Needs a Clear Digital Strategy",
    description:
      "How a practical strategy aligns customer journeys, channels, content, technology, and measurement.",
    excerpt:
      "A clear strategy gives every channel a role and helps the business decide what to do first, what to measure, and what to improve.",
    category: "Strategy",
    publishedAt: "2026-06-02",
    displayDate: "02 JUN 2026",
    readingTime: "5 min read",
    content: [
      {
        heading: "Strategy is a sequence of choices",
        paragraphs: [
          "A digital strategy defines the customer, the problem, the offer, the channels, and the actions that matter. It also decides what the business will not prioritize yet.",
          "This clarity helps marketing and technology teams coordinate their work before campaigns begin.",
        ],
      },
      {
        heading: "Turn the strategy into an operating rhythm",
        paragraphs: [
          "The plan should become a practical calendar for creative, landing pages, campaigns, measurement, sales follow-up, and review. Strategy becomes useful when each owner knows what must be ready and when.",
        ],
      },
    ],
  },
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

