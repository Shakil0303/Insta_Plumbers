"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] md:min-h-[calc(100vh-5rem)]">
        {/* Left Content Section */}
        <div className="bg-white flex items-center relative z-10">
          <Container className="py-8 md:py-24 text-center lg:text-left">
            {/* Main Heading with staggered animation */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-dark">
              <span
                className={cn(
                  "inline-block transform transition-all duration-700 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8"
                )}
              >
                🚿 Plumbing Emergency?
              </span>
              <br />
              <span
                className={cn(
                  "text-primary inline-block transform transition-all duration-700 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                Get Help in Minutes.
              </span>
            </h1>

            {/* Description with fade-in */}
            <p
              className={cn(
                "mt-4 text-gray-600 max-w-xl mx-auto lg:mx-0",
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              Book a trusted, local plumber near you—available 24/7 with instant
              response and up-front pricing. No delays. No surprises.
            </p>

            {/* CTA Buttons with staggered animation */}
            <div
              className={cn(
                "mt-6 flex flex-wrap justify-center lg:justify-start gap-4",
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <Button 
                variant="outline"
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Get Instant Help
              </Button>
              <Button
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Book a Plumber Now
              </Button>
            </div>
          </Container>
        </div>

        {/* Right Image Section */}
        <div
          className={cn(
            "relative hidden lg:block overflow-hidden",
            "transform transition-all duration-1000 ease-out",
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
          )}
          style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20 z-10" />
          <Image
            src="/images/hero.png"
            alt="Professional plumber"
            fill
            priority
            className={cn(
              "object-cover transition-transform duration-700 ease-out",
              isVisible ? "scale-100" : "scale-110"
            )}
          />
        </div>
      </div>

      {/* Animated background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-slow-delayed" />

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow 4s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
}