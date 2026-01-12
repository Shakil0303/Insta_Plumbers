<<<<<<< HEAD
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { testimonials, certifications } from '@/constants/testimonials';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCerts, setVisibleCerts] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Stagger certification animations
          certifications.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCerts(prev => [...prev, index]);
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

  const itemsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    (currentIndex + 1) * itemsPerView
  );

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .header-hidden {
          opacity: 0;
          transform: translateY(-30px);
        }

        .header-visible {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-enter {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-exit {
          animation: fadeInDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) reverse;
        }

        .cert-hidden {
          opacity: 0;
          transform: translateY(20px) scale(0.9);
        }

        .cert-visible {
          opacity: 0.7;
          transform: translateY(0) scale(1);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cert-visible:hover {
          opacity: 1;
          transform: translateY(-5px) scale(1.05);
        }

        .badge-animate {
          animation: badgePulse 2s ease-in-out infinite;
        }

        .quote-mark {
          position: absolute;
          top: -10px;
          left: -10px;
          font-size: 4rem;
          color: rgba(59, 130, 246, 0.1);
          font-family: Georgia, serif;
          line-height: 1;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .avatar-float {
          animation: float 3s ease-in-out infinite;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section ref={sectionRef} className="py-4 md:py-4 bg-white">
        <Container>

          {/* Header (Desktop) */}
          <div className={`hidden md:flex justify-between items-center mb-12 ${
            isVisible ? 'header-visible' : 'header-hidden'
          }`}>
            <div>
              <div className="inline-block border border-gray-300 rounded-full px-4 py-1 mb-3 badge-animate">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                  TESTIMONIALS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                What Our Customers Say
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-800 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                aria-label="Previous testimonials"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-800 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                aria-label="Next testimonials"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Header (Mobile) */}
          <div className={`md:hidden mb-8 ${
            isVisible ? 'header-visible' : 'header-hidden'
          }`}>
            <div className="inline-block border border-gray-300 rounded-full px-4 py-1 mb-3 badge-animate">
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
          </div>

          {/* Testimonials */}
          <div className="relative mb-12 md:mb-16">
            <button
              onClick={handlePrev}
              className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
            >
              ‹
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-12 md:px-0">
              {visibleTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="bg-gray-50 rounded-2xl p-6 md:p-8 relative testimonial-enter hover:bg-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="quote-mark">"</span>
                  
                  <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed relative z-10">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
                        {testimonial.location}
                      </p>
                    </div>

                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 ring-2 ring-transparent group-hover:ring-blue-400 transition-all duration-300 avatar-float">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
            >
              ›
            </button>
          </div>

          {/* Certifications */}
          <div className="pt-6 md:pt-8 border-t border-gray-200">

            {/* Mobile swipe carousel */}
            <div className="md:hidden overflow-x-auto no-scrollbar pb-8">
              <div className="flex gap-10 px-4 snap-x snap-mandatory">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className={`flex-shrink-0 snap-center h-12 flex items-center ${
                      visibleCerts.includes(index) ? 'cert-visible' : 'cert-hidden'
                    }`}
                  >
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={120}
                      height={64}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`h-16 flex items-center ${
                    visibleCerts.includes(index) ? 'cert-visible' : 'cert-hidden'
                  }`}
                >
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={120}
                    height={64}
                    className="h-full w-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </Container>
      </section>
    </>
  );
}
=======
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { testimonials, certifications } from '@/constants/testimonials';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    (currentIndex + 1) * itemsPerView
  );

  return (
    <section className="py-4 md:py-4 bg-white">
      <Container>

        {/* Header (Desktop) */}
        <div className="hidden md:flex justify-between items-center mb-12">
          <div>
            <div className="inline-block border border-gray-300 rounded-full px-4 py-1 mb-3">
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center justify-center"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center justify-center"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Header (Mobile) */}
        <div className="md:hidden mb-8">
          <div className="inline-block border border-gray-300 rounded-full px-4 py-1 mb-3">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="relative mb-12 md:mb-16">
          <button
            onClick={handlePrev}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center"
          >
            ‹
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-12 md:px-0">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
                      {testimonial.location}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center"
          >
            ›
          </button>
        </div>

        {/* Certifications */}
        <div className="pt-6 md:pt-8 border-t border-gray-200">

          {/* Mobile swipe carousel */}
          <div className="md:hidden overflow-x-auto no-scrollbar pb-8">
            <div className="flex gap-10 px-4 snap-x snap-mandatory">
              {certifications.map((cert, index) => (
                <div key={index} className="flex-shrink-0 snap-center h-12 flex items-center">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={120}
                    height={64}
                    className="h-full w-auto object-contain "
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {certifications.map((cert, index) => (
              <div key={index} className="h-16 flex items-center">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  width={120}
                  height={64}
                  className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
