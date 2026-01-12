
export interface Feature {
  icon: string; 
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: "/images/clock.svg",
    title: "Available 24/7",
    description: "Plumbing emergencies don’t wait, and neither do we.",
  },
  {
    icon: "/images/Dollar.svg",
    title: "Up-Front, Transparent Pricing",
    description: "No guesswork. No hidden fees",
  },
  {
    icon: "/images/Immediate-Response.svg",
    title: "Immediate Response",
    description:
      "We respond instantly. Book in seconds, get matched with a nearby plumber.",
  },
];
