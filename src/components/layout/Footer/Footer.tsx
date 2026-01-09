import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { FooterCTA } from "./FooterCTA";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconMap: Record<string, string> = {
    facebook: "/images/fb.svg",
    youtube: "/images/youtube.svg",
    "twitter-old": "/images/twitter-old.jpg",
    "twitter-new": "/images/x.svg",
  };

  return (
    <footer className="bg-dark-900 text-gray-300">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            <div className="md:col-span-1 text-center md:text-left">
              <Image
                src="/images/logo2.svg"
                alt="Insta Plumbers Logo"
                width={150}
                height={60}
                className="mx-auto md:mx-0"
                priority
              />

              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Created with ❤️ in London <br />
                Registered in England & Wales <br />
                Company No. 09888765 <br />
                ICO Registration No. AB986543 <br />
                ISO 27001 Compliant
              </p>

              <div className="flex justify-center md:justify-start gap-4 mt-4">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={iconMap[platform] || "/images/default.png"}
                      alt={platform}
                      width={22}
                      height={22}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 space-y-10">
              <FooterCTA />
              <FooterLinks />
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 py-6">
          <p className="text-sm text-gray-400 text-center">
            © {currentYear} MyCompany Name Ltd. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
