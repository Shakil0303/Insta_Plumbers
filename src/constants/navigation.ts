export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/howitworks' },
  { label: 'Services', href: '/services' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy & Cookie Policy", href: "/privacy" },
  { label: "Tearms & Conditions", href: "/terms" },
  { label: "Service Terms & Conditions", href: "/service terms" },
  { label: "Compliants Policy", href: "/compliants" },
  { label: "Other Policy", href: "/others" },
] as const;

export const ADDRESS = '3334 Stampford Street London, SE1 91Q, UK';

export const SOCIAL_LINKS = {
  facebook: "/images/fb.svg",
  youtube: "/images/youtube.svg",
  "twitter-old": "/images/twitter-old.jpg",
  "twitter-new": "/images/x.svg",
} as const;
