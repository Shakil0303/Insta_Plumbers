<<<<<<< HEAD
"use client";

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FEATURES } from "@/constants/features";

export function OurExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Stagger feature animations
          FEATURES.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFeatures(prev => [...prev, index]);
            }, 800 + (index * 150));
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes badgePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(5deg);
          }
        }

        .image-hidden {
          opacity: 0;
          transform: translateX(-50px) scale(0.95);
        }

        .content-hidden {
          opacity: 0;
          transform: translateX(50px);
        }

        .element-visible {
          opacity: 1;
          transform: translateX(0) scale(1);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-hidden {
          opacity: 0;
          transform: translateX(-30px);
        }

        .feature-visible {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .badge-animate {
          animation: badgePulse 2s ease-in-out infinite;
        }

        .icon-float {
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes shimmerButton {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .button-shimmer {
          background: linear-gradient(
            90deg,
            var(--color-dark) 0%,
            var(--color-dark) 40%,
            rgba(255, 255, 255, 0.3) 50%,
            var(--color-dark) 60%,
            var(--color-dark) 100%
          );
          background-size: 200% 100%;
          animation: shimmerButton 3s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} className="section-padding">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center text-center lg:text-left">
          
          <div 
            ref={imageRef}
            className={`relative h-[300px] md:h-[420px] rounded-3xl overflow-hidden hidden lg:block shadow-xl hover:shadow-2xl transition-all duration-500 ${
              isVisible ? 'element-visible' : 'image-hidden'
            }`}
          >
            <div className="relative w-full h-full group">
              <Image
                src="/images/Our-experience.png"
                alt="Professional plumber at work"
                fill
                className="object-contain transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div 
            ref={contentRef}
            className={`${isVisible ? 'element-visible' : 'content-hidden'}`}
          >
            <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-wide rounded-full border border-gray-300 text-gray-600 mx-auto badge-animate">
              OUR EXPERIENCE
            </span>

            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] leading-tight">
              Why Customers Love InstaPlumbers
            </h3>

            <p className="text-gray-600 mt-4 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We're built around speed, transparency, and trust—here's why
              thousands of Londoners choose us:
            </p>

            <div className="mt-8 space-y-6">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex flex-col sm:flex-row gap-4 items-center group hover:translate-x-2 transition-transform duration-300 ${
                    visibleFeatures.includes(index) ? 'feature-visible' : 'feature-hidden'
                  }`}
                >
                  <div className="flex items-center justify-center w-15 h-15 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-md">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={58}
                      height={58}
                      className="icon-float"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--color-dark)] text-center sm:text-left group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1 text-center sm:text-left">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button className="px-8 bg-dark mx-auto button-shimmer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Your Plumber Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
=======
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FEATURES } from "@/constants/features";

export function OurExperience(){
  return (
    <section className="section-padding">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center text-center lg:text-left">

        <div className="relative h-[300px] md:h-[420px] rounded-3xl overflow-hidden hidden lg:block">
          <Image
            src="/images/Our-experience.png"
            alt="Professional plumber at work"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div>
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-wide rounded-full border border-gray-300 text-gray-600 mx-auto">
            OUR EXPERIENCE
          </span>

          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)]">
            Why Customers Love InstaPlumbers
          </h3>

          <p className="text-gray-600 mt-4 max-w-lg mx-auto lg:mx-0">
            We’re built around speed, transparency, and trust—here’s why
            thousands of Londoners choose us:
          </p>

          <div className="mt-8 space-y-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col sm:flex-row gap-4 items-center"
              >
                <div className="flex items-center justify-center w-15 h-15 rounded-xl bg-blue-100">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={58}
                    height={58}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-dark)] text-center sm:text-left">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 text-center sm:text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button className="px-8 bg-dark mx-auto">
              Book Your Plumber Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
