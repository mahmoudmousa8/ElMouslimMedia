export type SubscriptionProduct = {
  name: string;
  slug: string;
  category: string;
  duration: string;
  originalPrice?: number;
  salePrice?: number;
  currency: "USD";
  summary: string;
  features: string[];
  activationRequirements: string[];
  activationTime?: string;
  paymentMethods: string[];
  status: "available" | "coming-soon";
  whatsappOrderMessage?: string;
};

export const paymentMethods = [
  "PayPal",
  "Visa through PayPal",
  "Mastercard through PayPal",
  "Binance Pay",
  "Vodafone Cash",
  "InstaPay",
  "Bank Transfer",
];

export const subscriptions: SubscriptionProduct[] = [
  {
    name: "Google Gemini Pro + 5TB Cloud",
    slug: "google-gemini-pro-5tb-cloud",
    category: "AI & Cloud",
    duration: "12 Months",
    originalPrice: 200,
    salePrice: 6,
    currency: "USD",
    summary:
      "Advanced artificial intelligence tools and 5TB of cloud storage in one annual subscription.",
    features: [
      "Gemini Pro for writing, coding, and advanced research",
      "5TB cloud storage for Google Drive, Photos, and Gmail",
      "Veo 3.1 and Flow video-generation tools",
      "1,000 monthly credits where applicable",
      "Nano Banana Pro for image generation and editing",
      "NotebookLM",
      "Deep Research",
      "Activation on a Gmail account",
    ],
    activationRequirements: [
      "A Gmail account is required",
      "The customer may use an existing or newly created Gmail account",
      "The customer should remain available during activation",
      "Payment confirmation must be supplied before activation",
      "Activation instructions are coordinated through WhatsApp",
    ],
    activationTime: "Estimated activation time: 5 to 15 minutes",
    paymentMethods,
    status: "available",
    whatsappOrderMessage:
      "Hello, I would like to order the Google Gemini Pro + 5TB Cloud subscription for USD 6. Please send me the payment and activation instructions.",
  },
  {
    name: "Canva Pro",
    slug: "canva-pro",
    category: "Design",
    duration: "12 Months",
    currency: "USD",
    summary:
      "A future annual design subscription offer. Full activation information will be published when the offer becomes available.",
    features: ["Annual plan", "Activation details will be announced"],
    activationRequirements: [],
    paymentMethods,
    status: "coming-soon",
  },
  {
    name: "YouTube Premium",
    slug: "youtube-premium",
    category: "Entertainment",
    duration: "12 Months",
    currency: "USD",
    summary:
      "A future annual YouTube Premium offer. Full activation information will be published when the offer becomes available.",
    features: ["Annual plan", "Activation details will be announced"],
    activationRequirements: [],
    paymentMethods,
    status: "coming-soon",
  },
];

export const subscriptionFaqs = [
  {
    question: "How do I place an order?",
    answer:
      "Select an available product and use its Order Now button. WhatsApp will open with the product and price already included in the message.",
  },
  {
    question: "How long does activation take?",
    answer:
      "The current Gemini offer is usually activated within 5 to 15 minutes after the required information and payment confirmation are available.",
  },
  {
    question: "Can I order a Coming Soon product?",
    answer:
      "No. Coming Soon products do not have an active purchase button. Their order option will appear only when activation and support are ready.",
  },
  {
    question: "Are payment details published on this website?",
    answer:
      "No. Private wallet, bank, account, and payment credentials are never published. The team sends the appropriate instructions privately through the official contact channel.",
  },
  {
    question: "Who owns the product trademarks?",
    answer:
      "Third-party company names, product names, and trademarks belong to their respective owners. El Mouslim Digital Marketing is not presented as the owner of those marks.",
  },
];

export function calculateDiscount(
  originalPrice?: number,
  salePrice?: number,
) {
  if (!originalPrice || salePrice === undefined || originalPrice <= salePrice) {
    return null;
  }
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

