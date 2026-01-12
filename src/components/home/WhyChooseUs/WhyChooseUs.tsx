<<<<<<< HEAD
"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: "/images/Experience.svg",
      alt: "Experience",
      text: "Min. 5 Years",
      subtext: "Experience",
    },
    {
      icon: "/images/Verified.svg",
      alt: "Verified",
      text: "Vetted &",
      subtext: "Verified",
    },
    {
      icon: "/images/Fullyinsured.svg",
      alt: "Insured",
      text: "Fully",
      subtext: "Insured",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Title Section */}
        <div className="bg-white py-8">
          <Container className="px-4 text-center">
            <h2
              className={cn(
                "text-3xl font-bold text-dark-900",
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8"
              )}
            >
              Why Choose <br /> InstaPlumbers?
            </h2>
          </Container>
        </div>

        {/* Features Section */}
        <div className="bg-primary py-8">
          <Container className="px-4">
            <div className="flex justify-around items-start mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature.alt}
                  className={cn(
                    "flex flex-col items-center gap-3",
                    "transform transition-all duration-700 ease-out",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  )}
                  style={{
                    transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms",
                  }}
                >
                  <div className="w-16 h-16 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                    <Image
                      src={feature.icon}
                      alt={feature.alt}
                      width={48}
                      height={48}
                    />
                  </div>
                  <p className="text-white text-sm font-medium text-center leading-tight">
                    {feature.text} <br /> {feature.subtext}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={cn(
                "flex justify-center",
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? "650ms" : "0ms" }}
            >
              <Button className="bg-white text-primary hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 active:scale-95">
                Learn More
              </Button>
            </div>
          </Container>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-3 min-h-[260px]">
        {/* Left Section - Title */}
        <div className="bg-dark-900 flex items-center overflow-hidden">
          <Container className="py-12 text-left">
            <h2
              className={cn(
                "text-4xl font-bold mb-6 text-white",
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              )}
            >
              Why Choose <br /> InstaPlumbers?
            </h2>
            <Button
              variant="primary"
              className={cn(
                "sm:variant-outline transform transition-all duration-700 ease-out hover:scale-105 active:scale-95",
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              )}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              Learn More
            </Button>
          </Container>
        </div>

        {/* Right Section - Features */}
        <div className="bg-primary col-span-2 flex flex-col items-start py-12 overflow-hidden">
          <Container className="px-4">
            <div className="grid grid-cols-3 gap-8 md:gap-40 text-white">
              {features.map((feature, index) => (
                <div
                  key={feature.alt}
                  className={cn(
                    "flex flex-col items-center gap-3",
                    "transform transition-all duration-700 ease-out",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  )}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
                  }}
                >
                  <div className="transform transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <Image
                      src={feature.icon}
                      alt={feature.alt}
                      width={48}
                      height={48}
                    />
                  </div>
                  <p className="text-lg font-medium text-center">
                    {feature.text} <br /> {feature.subtext}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
=======
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function WhyChooseUs() {
  return (
    <section className="w-full">
      <div className="lg:hidden">

        <div className="bg-white py-8">
          <Container className="px-4 text-center">
            <h2 className="text-3xl font-bold text-dark-900">
              Why Choose <br /> InstaPlumbers?
            </h2>
          </Container>
        </div>

        <div className="bg-primary py-8">
          <Container className="px-4">
            <div className="flex justify-around items-start mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src="/images/Experience.svg"
                    alt="Experience"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text-white text-sm font-medium text-center leading-tight">
                  Min. 5 Years <br /> Experience
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src="/images/Verified.svg"
                    alt="Verified"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text-white text-sm font-medium text-center leading-tight">
                  Vetted & <br /> Verified
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src="/images/Fullyinsured.svg"
                    alt="Insured"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text-white text-sm font-medium text-center leading-tight">
                  Fully <br /> Insured
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100">
                Learn More
              </Button>
            </div>
          </Container>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-3 min-h-[260px]">
        <div className="bg-dark-900 flex items-center">
          <Container className="py-12 text-left">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Why Choose <br /> InstaPlumbers?
            </h2>
            <Button variant="primary" className="sm:variant-outline">
              Learn More
            </Button>
          </Container>
        </div>

        <div className="bg-primary col-span-2 flex flex-col items-start py-12">
          <Container className="px-4">
            <div className="grid grid-cols-3 gap-8 md:gap-40 text-white">
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/images/Experience.svg"
                  alt="Experience"
                  width={48}
                  height={48}
                />
                <p className="text-lg font-medium text-center">
                  Min. 5 Years <br /> Experience
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/images/Verified.svg"
                  alt="Verified"
                  width={48}
                  height={48}
                />
                <p className="text-lg font-medium text-center">
                  Vetted & <br /> Verified
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/images/Fullyinsured.svg"
                  alt="Insured"
                  width={48}
                  height={48}
                />
                <p className="text-lg font-medium text-center">
                  Fully <br /> Insured
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
}