<<<<<<< HEAD
"use client";

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CallNow() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-fade-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .map-hidden {
          opacity: 0;
          transform: translateX(-60px);
        }

        .content-hidden {
          opacity: 0;
          transform: translateX(60px);
        }

        .element-visible {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .button-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      <section id='contact' ref={sectionRef} className="section-padding">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          <div 
            ref={mapRef}
            className={`relative w-full h-[240px] md:h-[320px] order-1 ${
              isVisible ? 'element-visible' : 'map-hidden'
            }`}
          >
            <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/map1.png"
                alt="Map showing nearby InstaPlumbers"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          <div 
            ref={contentRef}
            className={`order-2 bg-[var(--color-primary)] p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
              isVisible ? 'element-visible' : 'content-hidden'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white transform transition-transform duration-300 hover:translate-x-2">
              Call an InstaPlumber Now
            </h3>

            <p className="text-white/90 mt-3 max-w-md leading-relaxed">
              We have local plumbers near you —- ready to assist 24/7, day or night.
            </p>

            <div className="mt-6 group">
              <Button
                variant="outline"
                className="bg-white text-[var(--color-dark)] hover:bg-dark/90 relative overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              >
                <span className="relative z-10">Call Plumber Now</span>
                <span className="absolute inset-0 button-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-white/80 text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
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

export function CallNow () {
  return (
    <section className="section-padding">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        <div className="relative w-full h-[240px] md:h-[320px] order-1">
          <Image
            src="/images/map1.png"
            alt="Map showing nearby InstaPlumbers"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="order-2 bg-[var(--color-primary)] p-6 md:p-8 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Call an InstaPlumber Now
          </h3>

          <p className="text-white/90 mt-3 max-w-md">
            We have local plumbers near you —- ready to assist 24/7, day or night.
          </p>

          <div className="mt-6">
            <Button
              variant="outline"
              className="bg-white text-[var(--color-dark)] hover:bg-dark/90"
            >
              Call Plumber Now
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
