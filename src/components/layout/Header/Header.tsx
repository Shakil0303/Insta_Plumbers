<<<<<<< HEAD
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Detect scroll for header shadow enhancement
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-all duration-300",
        hasScrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo with fade-in and slide animation */}
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 transform transition-all duration-700",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            )}
          >
            <Image
              src="/logo.svg"
              alt="Insta Plumbers Logo"
              width={150}
              height={670}
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation with staggered animation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-md font-medium transition-all duration-300 relative group",
                  "transform hover:-translate-y-0.5",
                  pathname === link.href ? "text-primary" : "text-gray-900",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                )}
                style={{
                  transitionDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
                }}
              >
                {link.label}
                {/* Animated underline - always show for home or on hover */}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    pathname === link.href 
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button with fade-in */}
          <Button
            variant="outline"
            className={cn(
              "hidden lg:block transform transition-all duration-700",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            Contact Us
          </Button>

          {/* Mobile Menu Button with animation */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "md:hidden p-2 text-gray-700 hover:text-primary",
              "transition-all duration-300 hover:scale-110 active:scale-95",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            aria-label="Toggle menu"
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            {/* Animated hamburger icon */}
            <div className="w-6 h-6 relative">
              <span
                className={cn(
                  "absolute w-6 h-0.5 bg-current transition-all duration-300",
                  isMenuOpen
                    ? "top-1/2 rotate-45"
                    : "top-1 rotate-0"
                )}
              />
              <span
                className={cn(
                  "absolute top-1/2 w-6 h-0.5 bg-current transition-all duration-300",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute w-6 h-0.5 bg-current transition-all duration-300",
                  isMenuOpen
                    ? "top-1/2 -rotate-45"
                    : "bottom-1 rotate-0"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu with slide-down animation */}
        <>
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "max-h-96 opacity-100 border-t border-gray-200"
              : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col py-4 space-y-1">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-base font-medium py-3 px-2 rounded-lg",
                  "transition-all duration-300",
                  "hover:bg-gray-50 hover:translate-x-2",
                  pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-gray-700",
                  isMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <Button
              variant="outline"
              className={cn(
                "mt-2 transition-all duration-300",
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{
                transitionDelay: isMenuOpen
                  ? `${NAV_LINKS.length * 50}ms`
                  : "0ms",
              }}
            >
              Contact Us
            </Button>
          </nav>
        </div>
        </>
      </Container>
    </header>
    
  );
};
=======
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Insta Plumbers Logo"
              width={150}
              height={670}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-md font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-gray-900"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button variant="outline" className="hidden lg:block">
            Contact Us
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary py-2",
                    pathname === link.href ? "text-primary" : "text-gray-700"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};
>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
