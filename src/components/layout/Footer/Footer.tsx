<<<<<<< HEAD
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { FooterCTA } from "./FooterCTA";
import { FooterLinks } from "./FooterLinks";
import { cn } from "@/lib/cn";
import { MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  const iconMap: Record<string, string> = {
    facebook: "/images/fb.svg",
    youtube: "/images/youtube.svg",
    "twitter-old": "/images/twitter-old.jpg",
    "twitter-new": "/images/x.svg",
  };

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of footer is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it comes into view
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-dark-900 text-gray-300">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo and Company Info Section */}
            <div
              className={cn(
                "md:col-span-1 text-center md:text-left",
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <Image
                src="/images/logo2.svg"
                alt="Insta Plumbers Logo"
                width={150}
                height={60}
                className="mx-auto md:mx-0 transition-transform duration-300 hover:scale-105"
                priority
              />

              <p
                className={cn(
                  "text-sm text-gray-400 mt-4 leading-relaxed",
                  "transform transition-all duration-700 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
              >
                Created with ❤️ in London <br />
                Registered in England & Wales <br />
                Company No. 09888765 <br />
                ICO Registration No. AB986543 <br />
                ISO 27001 Compliant
              </p>

              {/* Social Media Icons with staggered animation */}
              <div
                className={cn(
                  "flex justify-center md:justify-start gap-4 mt-4",
                  "transform transition-all duration-700 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                {Object.entries(SOCIAL_LINKS).map(([platform, url], index) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "transform transition-all duration-300",
                      "hover:scale-125 hover:-translate-y-1",
                      "opacity-0 animate-fade-in"
                    )}
                    style={{
                      animationDelay: isVisible
                        ? `${300 + index * 100}ms`
                        : "0ms",
                      animationFillMode: "forwards",
                    }}
                  >
                    <Image
                      src={iconMap[platform] || "/images/default.png"}
                      alt={platform}
                      width={22}
                      height={22}
                      className="transition-opacity duration-300 hover:opacity-80"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer CTA and Links Section */}
            <div
              className={cn(
                "md:col-span-3 space-y-10",
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              <FooterCTA />
              <FooterLinks />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className={cn(
            "border-t border-dark-800 py-6",
            "transform transition-all duration-700 ease-out",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
        >
          <p className="text-sm text-gray-400 text-center">
            © {currentYear} MyCompany Name Ltd. All rights reserved.
          </p>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
};
=======
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
>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
