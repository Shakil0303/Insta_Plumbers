<<<<<<< HEAD
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/constants/services";

export function OurCoreServices() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-down');
        }
      });
    }, observerOptions);

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setTimeout(() => {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }, index * 100);
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    cardsRef.current.forEach(card => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      titleObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .card-hidden {
          opacity: 0;
          transform: translateY(30px);
        }

        .card-visible {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <section id='services' ref={sectionRef} className="section-padding bg-[#EAF6FF]">
        <div className="container">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-dark mb-12 opacity-0"
          >
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                ref={el => { cardsRef.current[index] = el; }}
                data-index={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${
                  visibleItems.includes(index) ? 'card-visible' : 'card-hidden'
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  <div className="absolute bottom-0 left-0">
                    <div className="bg-primary w-20 h-20 rounded-tr-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={service.badge}
                        alt={`${service.title} icon`}
                        width={40}
                        height={40}
                        className="w-15 h-15"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors duration-200 uppercase text-sm tracking-wide group-hover:gap-3"
                  >
                    Learn More
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
=======
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/constants/services"; // Import from services.ts

export function OurCoreServices() {
  return (
    <section className="section-padding bg-[#EAF6FF]">
      <div className="container">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-dark mb-12">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute bottom-0 left-0">
                  <div className="bg-primary w-20 h-20 rounded-tr-3xl flex items-center justify-center">
                    <Image
                      src={service.badge}
                      alt={`${service.title} icon`}
                      width={40}
                      height={40}
                      className="w-15 h-15"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-3 flex items-center gap-2">
                  <span>{service.icon}</span>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="inline-block text-primary font-semibold hover:text-primary-600 transition-colors duration-200 uppercase text-sm tracking-wide"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
}