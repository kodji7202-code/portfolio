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
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.fromTo(
        linksRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    } else {
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
      className={`fixed inset-0 z-[90] opacity-0 md:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        visibility: isOpen ? "visible" : "hidden",
        background:
          "linear-gradient(135deg, rgba(8,8,8,0.98) 0%, rgba(20,10,30,0.98) 50%, rgba(8,8,8,0.98) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Decorative gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center z-50 cursor-pointer group"
        aria-label="Close menu"
      >
        <span className="relative w-6 h-6">
          <span className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 rotate-45 transition-colors duration-300 bg-[#F5F0E8] group-hover:bg-pink-400" />
          <span className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 -rotate-45 transition-colors duration-300 bg-[#F5F0E8] group-hover:bg-pink-400" />
        </span>
      </button>

      {/* Navigation links */}
      <div
        ref={linksRef}
        className="flex flex-col items-center justify-center min-h-screen gap-6 px-8"
      >
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
            className="text-[28px] font-medium text-[#F5F0E8]/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400 transition-all duration-300"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.05em",
            }}
          >
            <span className="text-[12px] text-pink-500/50 mr-3 font-mono">
              0{index + 1}
            </span>
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
          className="mt-6 px-8 py-3 text-[13px] uppercase tracking-[0.15em] font-semibold text-white cursor-pointer transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            background: "linear-gradient(135deg, #ec4899, #a855f7)",
            borderRadius: "24px",
            boxShadow: "0 0 20px rgba(236,72,153,0.4)",
          }}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}
