"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import portfolioData from "@/data/portfolio";

const navItems = portfolioData.navItems;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  usePathname();

  // Handle link click
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  // GSAP animations
  useEffect(() => {
    if (!containerRef.current || !linksRef.current) return;

    if (isOpen) {
      // Animate in
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.fromTo(
        linksRef.current.children,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    } else {
      // Animate out
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-40 bg-[#080808] opacity-0 pointer-events-none md:hidden"
      style={{ visibility: isOpen ? "visible" : "hidden" }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center z-50"
        aria-label="Close menu"
      >
        <span className="relative w-6 h-6">
          <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#F5F0E8] -translate-y-1/2 rotate-45" />
          <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#F5F0E8] -translate-y-1/2 -rotate-45" />
        </span>
      </button>

      {/* Navigation links */}
      <div
        ref={linksRef}
        className="flex flex-col items-center justify-center min-h-screen space-y-8"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
            className="text-[32px] font-normal text-[#F5F0E8]/80 hover:text-[#C9A84C] transition-colors duration-300"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.05em",
            }}
          >
            {item.name}
          </Link>
        ))}

        {/* CTA Button in mobile menu */}
        <button
          onClick={() => {
            const element = document.querySelector("#contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
            onClose();
          }}
          className="mt-8 px-8 py-3 border border-[#C9A84C] text-[#C9A84C] text-[13px] uppercase tracking-[0.1em] hover:bg-[#C9A84C] hover:text-[#080808] transition-all duration-300"
          style={{
            fontFamily: "var(--font-space-grotesk)",
          }}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}
