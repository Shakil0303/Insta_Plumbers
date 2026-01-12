<<<<<<< HEAD
"use client";

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const AREAS = [
  "Camden",
  "Islington",
  "Westminster",
  "Haringey",
  "Barnet",
  "Enfield",
  "Hackney",
  "Hammersmith",
];

export function LocationsCoverage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleAreas, setVisibleAreas] = useState<number[]>([]);
  const [visibleRegions, setVisibleRegions] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
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
          
          // Stagger area animations
          AREAS.forEach((_, index) => {
            setTimeout(() => {
              setVisibleAreas(prev => [...prev, index]);
            }, 600 + (index * 80));
          });

          // Stagger region animations
          [0, 1, 2].forEach((index) => {
            setTimeout(() => {
              setVisibleRegions(prev => [...prev, index]);
            }, 1200 + (index * 100));
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes checkPop {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .map-hidden {
          opacity: 0;
          transform: translateX(-50px);
        }

        .content-hidden {
          opacity: 0;
          transform: translateX(50px);
        }

        .element-visible {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .area-hidden {
          opacity: 0;
          transform: translateY(10px) scale(0.9);
        }

        .area-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .region-hidden {
          opacity: 0;
          transform: translateX(-20px);
        }

        .region-visible {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .check-icon {
          animation: checkPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} className="section-padding bg-[#EAF6FF]">
        <div className="container grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">
          
          <div 
            ref={mapRef}
            className={`relative w-full h-[280px] md:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
              isVisible ? 'element-visible' : 'map-hidden'
            }`}
          >
            <div className="relative w-full h-full group">
              <Image
                src="/images/map2.png" 
                alt="London and Essex service coverage map"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div 
            ref={contentRef}
            className={`max-w-xl text-center md:text-left mx-auto md:mx-0 ${
              isVisible ? 'element-visible' : 'content-hidden'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] leading-tight">
              Expanding Across London <br /> & Essex
            </h3>

            <p className="text-gray-600 mt-4 max-w-lg leading-relaxed">
              We're growing fast—now serving all major boroughs across
              London and Essex with trusted, on-call plumbers ready to help 24/7.
            </p>

            <div className="mt-8 space-y-6">
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-[var(--color-dark)]">
                    Central & North London
                  </h4>
                  <ChevronDown className="h-5 w-5 text-gray-500 transform hover:translate-y-1 transition-transform duration-200" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  {AREAS.map((area, index) => (
                    <div 
                      key={area} 
                      className={`flex items-center gap-2 ${
                        visibleAreas.includes(index) ? 'area-visible' : 'area-hidden'
                      }`}
                    >
                      <span className="bg-[var(--color-primary)] rounded-md p-1 hover:scale-110 transition-transform duration-200">
                        {visibleAreas.includes(index) && (
                          <Check className="h-4 w-4 text-white check-icon" />
                        )}
                      </span>
                      <span className="text-sm text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {["East London", "South London", "West London"].map((region, index) => (
                <div
                  key={region}
                  className={`flex items-center justify-between border-t pt-4 hover:pl-2 transition-all duration-300 ${
                    visibleRegions.includes(index) ? 'region-visible' : 'region-hidden'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-[var(--color-dark)] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></span>
                    {region}
                  </h4>
                  <ChevronDown className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
=======
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const AREAS = [
  "Camden",
  "Islington",
  "Westminster",
  "Haringey",
  "Barnet",
  "Enfield",
  "Hackney",
  "Hammersmith",
];

export function LocationsCoverage() {
  return (
    <section className="section-padding bg-[#EAF6FF]">
      <div className="container grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">

        <div className="relative w-full h-[280px] md:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden">
          <Image
            src="/images/map2.png" 
            alt="London and Essex service coverage map"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)]">
            Expanding Across London <br /> & Essex
          </h3>

          <p className="text-gray-600 mt-4 max-w-lg">
            We're growing fast—now serving all major boroughs across
            London and Essex with trusted, on-call plumbers ready to help 24/7.
          </p>

          <div className="mt-8 space-y-6">

            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-[var(--color-dark)]">
                  Central & North London
                </h4>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="bg-[var(--color-primary)] rounded-md p-1">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-sm text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {["East London", "South London", "West London"].map((region) => (
              <div
                key={region}
                className="flex items-center justify-between border-t pt-4"
              >
                <h4 className="text-lg font-semibold text-[var(--color-dark)]">
                  {region}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
