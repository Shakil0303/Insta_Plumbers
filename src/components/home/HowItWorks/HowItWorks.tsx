"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { STEPS } from "@/constants/states";
import { cn } from "@/lib/cn";

export function HowItWorks() {
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
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
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

  return (
    <section id="howitworks" ref={sectionRef} className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div
          className={cn(
            "hidden md:flex justify-center mb-6",
            "transform transition-all duration-700 ease-out",
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95"
          )}
        >
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-wide rounded-full border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-all duration-300">
            How It Works
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className={cn(
            "text-2xl md:text-2xl lg:text-4xl font-bold text-center text-dark mb-4",
            "transform transition-all duration-700 ease-out",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
        >
          We're like Uber — but for plumbers.
        </h2>

        {/* Subheading */}
        <h2
          className={cn(
            "hidden md:block text-2xl md:text-2xl lg:text-4xl font-bold text-center text-dark mb-4",
            "transform transition-all duration-700 ease-out",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          Simple, fast, and reliable.
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className={cn(
                "bg-white rounded-2xl p-8 shadow-sm relative",
                "transform transition-all duration-700 ease-out",
                "hover:shadow-xl hover:-translate-y-2",
                "group cursor-pointer",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{
                transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div
                  className={cn(
                    "transform transition-all duration-500 ease-out",
                    "group-hover:scale-110 group-hover:rotate-6",
                    isVisible
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  )}
                  style={{
                    transitionDelay: isVisible
                      ? `${400 + index * 150}ms`
                      : "0ms",
                  }}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={64}
                    height={64}
                    className="w-25 h-25"
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className={cn(
                  "text-xl font-bold text-dark mb-3 text-center",
                  "transform transition-all duration-300",
                  "group-hover:text-primary"
                )}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center transition-colors duration-300 group-hover:text-gray-700">
                {step.description}
              </p>

              {/* Animated Bottom Border */}
              <div
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-primary",
                  "transition-all duration-300 ease-out",
                  "w-0 group-hover:w-3/4 rounded-t-full"
                )}
              />
            </div>
          ))}
        </div>

        {/* Connecting Line Animation (Desktop) */}
        <div className="hidden lg:block relative -mt-52 mb-52 pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-2"
            style={{ top: "50%" }}
          >
            <line
              x1="12.5%"
              y1="0"
              x2="87.5%"
              y2="0"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="8,8"
              className={cn(
                "transition-all duration-1000 ease-out",
                isVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}