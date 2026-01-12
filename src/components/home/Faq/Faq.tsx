<<<<<<< HEAD
'use client';

import { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { faqs } from '@/constants/faqs';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleFaqs, setVisibleFaqs] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Stagger FAQ items
          faqs.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFaqs(prev => [...prev, index]);
            }, 500 + (index * 100));
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        @keyframes badgePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes expandIn {
          from {
            opacity: 0;
            max-height: 0;
            transform: scaleY(0.8);
          }
          to {
            opacity: 1;
            max-height: 384px;
            transform: scaleY(1);
          }
        }

        @keyframes collapseOut {
          from {
            opacity: 1;
            max-height: 384px;
            transform: scaleY(1);
          }
          to {
            opacity: 0;
            max-height: 0;
            transform: scaleY(0.8);
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

        .faq-hidden {
          opacity: 0;
          transform: translateX(-40px);
        }

        .faq-visible {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .badge-animate {
          animation: badgePulse 2s ease-in-out infinite;
        }

        .answer-enter {
          animation: expandIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: top;
        }

        .answer-exit {
          animation: collapseOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: top;
        }

        @keyframes pulse-border {
          0%, 100% {
            border-color: rgb(229, 231, 235);
          }
          50% {
            border-color: rgb(59, 130, 246);
          }
        }

        .faq-active {
          animation: pulse-border 2s ease-in-out infinite;
          border-color: rgb(59, 130, 246);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .shine-effect:hover::after {
          left: 100%;
        }
      `}</style>

      <section id='faqs' ref={sectionRef} className="py-12 md:py-16 bg-white">
        <Container>
          {/* Header */}
          <div className={`text-center mb-10 md:mb-12 ${
            isVisible ? 'header-visible' : 'header-hidden'
          }`}>
            <div className="inline-block border border-gray-300 rounded-full px-4 py-1 mb-3 badge-animate">
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              We've answered the most common questions to help you book with confidence.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-md ${
                  openIndex === index ? 'faq-active shadow-lg' : ''
                } ${
                  visibleFaqs.includes(index) ? 'faq-visible' : 'faq-hidden'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-all duration-200 shine-effect group"
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-semibold text-gray-900 text-base md:text-lg pr-4 transition-colors duration-200 ${
                    openIndex === index ? 'text-blue-600' : 'group-hover:text-blue-600'
                  }`}>
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      openIndex === index 
                        ? 'rotate-180 text-blue-600 scale-110' 
                        : 'text-gray-500 group-hover:text-blue-600 group-hover:scale-110'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 answer-enter' : 'max-h-0 answer-exit'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 bg-gradient-to-b from-blue-50/30 to-transparent">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
=======
'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { faqs } from '@/constants/faqs';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block border border-gray-300 rounded-full px-4 py-1 mb-3">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We've answered the most common questions to help you book with confidence.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
