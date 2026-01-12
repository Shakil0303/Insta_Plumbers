"use client";

import React, { useEffect, useRef, useState } from 'react';
import { BlogPost, blogPosts } from '@/constants/blogData';
import { cn } from '@/lib/cn';

export function Blog() {
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
        threshold: 0.1,
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

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <div>
            {/* Badge */}
            <span
              className={cn(
                "inline-block px-4 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full mb-4",
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-4 scale-95"
              )}
            >
              RECENT BLOG
            </span>

            {/* Title */}
            <h2
              className={cn(
                "text-4xl md:text-5xl font-bold text-gray-900",
                "transform transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              )}
              style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
            >
              From the InstaPlumbers Blog
            </h2>
          </div>

          {/* View All Button - Desktop */}
          <button
            className={cn(
              "hidden md:block px-6 py-3 text-sm font-medium text-gray-900 border-2 border-gray-900 rounded-full",
              "hover:bg-gray-900 hover:text-white transition-all duration-300",
              "transform hover:scale-105 active:scale-95",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            VIEW ALL POST
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post: BlogPost, index: number) => (
            <article
              key={post.id}
              className={cn(
                "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer",
                "transform hover:-translate-y-2",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{
                transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-700 ease-out",
                    "group-hover:scale-110",
                    isVisible ? "scale-100" : "scale-110"
                  )}
                  style={{
                    transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms",
                  }}
                />

                {/* Date Badge */}
                <span
                  className={cn(
                    "absolute bottom-4 right-4 px-3 py-1 text-xs font-medium text-blue-600 bg-white rounded-full shadow-md",
                    "transform transition-all duration-700 ease-out",
                    isVisible
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-8 scale-75"
                  )}
                  style={{
                    transitionDelay: isVisible ? `${500 + index * 100}ms` : "0ms",
                  }}
                >
                  {post.date}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3
                  className={cn(
                    "text-xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300",
                    "transform transition-all duration-700 ease-out",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{
                    transitionDelay: isVisible ? `${450 + index * 100}ms` : "0ms",
                  }}
                >
                  {post.title}
                </h3>

                {/* Meta Information */}
                <div
                  className={cn(
                    "flex items-center text-sm text-gray-600",
                    "transform transition-all duration-700 ease-out",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{
                    transitionDelay: isVisible ? `${500 + index * 100}ms` : "0ms",
                  }}
                >
                  <span className="font-medium hover:text-blue-600 transition-colors duration-300">
                    {post.category}
                  </span>
                  <span className="mx-2">/</span>
                  <span className="hover:text-blue-600 transition-colors duration-300">
                    {post.author}
                  </span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div
          className={cn(
            "mt-8 text-center md:hidden",
            "transform transition-all duration-700 ease-out",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
          style={{
            transitionDelay: isVisible ? `${300 + blogPosts.length * 100}ms` : "0ms",
          }}
        >
          <button className="px-6 py-3 text-sm font-medium text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
            VIEW ALL POST
          </button>
        </div>
      </div>
    </section>
  );
}