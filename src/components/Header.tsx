"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import MobileMenu from "./MobileMenu";
import portfolioData from "@/data/portfolio";

const navItems = portfolioData.navItems;

export default function Header() {
  const { isScrolled } = useScrollPosition(80);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("#home");
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  usePathname();

  // Track active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href);
      
      for (const sectionId of sections.reverse()) {
        const element = document.querySelector(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Magnetic button effect
  useEffect(() => {
    if (!ctaRef.current) return;

    const button = ctaRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const maxMove = 8;
      const xPercent = (x / rect.width) * maxMove;
      const yPercent = (y / rect.height) * maxMove;

      gsap.to(button, {
        x: xPercent,
        y: yPercent,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Hamburger animation
  useEffect(() => {
    if (!hamburgerRef.current) return;

    const hamburger = hamburgerRef.current;
    const lines = hamburger.querySelectorAll(".hamburger-line");

    if (isMobileMenuOpen) {
      gsap.to(lines[0], {
        y: 5,
        rotation: 45,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(lines[1], {
        opacity: 0,
        duration: 0.2,
      });
      gsap.to(lines[2], {
        y: -5,
        rotation: -45,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(lines[0], {
        y: 0,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(lines[1], {
        opacity: 1,
        duration: 0.2,
      });
      gsap.to(lines[2], {
        y: 0,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isMobileMenuOpen]);

  // GSAP entry animation
  useEffect(() => {
    if (hasAnimated || !headerRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => setHasAnimated(true),
    });

    tl.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0,
      delay: 0.2,
    });

    if (logoRef.current) {
      tl.to(
        logoRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        0.2
      );
    }

    if (navRef.current) {
      const navChildren = navRef.current.children;
      tl.to(
        navChildren,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
        },
        0.2
      );
    }

    if (ctaRef.current) {
      tl.to(
        ctaRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        0.2
      );
    }
  }, [hasAnimated]);

  // Handle link click
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle CTA click
  const handleCTAClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500`}
        style={{
          padding: "20px 48px",
        }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient background that shows on scroll */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: isScrolled
                ? "linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.1) 50%, rgba(99,102,241,0.15) 100%)"
                : "transparent",
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Glassmorphism effect when scrolled */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: isScrolled ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            style={{
              background: "rgba(8,8,8,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          />
          
          {/* Bottom border glow */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            animate={{
              background: isScrolled
                ? "linear-gradient(90deg, transparent, rgba(236,72,153,0.6), rgba(168,85,247,0.6), rgba(99,102,241,0.6), transparent)"
                : "transparent",
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Animated glow spots */}
          <motion.div
            className="absolute top-0 left-1/4 w-32 h-32 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
            animate={{
              opacity: isScrolled ? [0.3, 0.6, 0.3] : 0,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-0 right-1/4 w-40 h-40 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
            animate={{
              opacity: isScrolled ? [0.3, 0.6, 0.3] : 0,
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#home"
              ref={logoRef}
              onClick={(e) => handleLinkClick(e, "#home")}
              className="relative text-[24px] font-bold cursor-pointer group"
              style={{
                fontFamily: "var(--font-clash-display), sans-serif",
                fontWeight: 700,
              }}
            >
              {/* Glow effect */}
              <span className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
              
              <span 
                className="relative text-[#F5F0E8] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400 transition-all duration-300"
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.letterSpacing = "4px";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.letterSpacing = "0px";
                }}
              >
                CC
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div
              ref={navRef}
              className="flex items-center gap-6 px-6 py-3 rounded-full"
              style={{
                background: isScrolled 
                  ? "rgba(255,255,255,0.05)" 
                  : "rgba(236,72,153,0.15)",
                border: "1px solid rgba(236,72,153,0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                transition: "all 0.5s ease",
              }}
            >
              {navItems.map((item) => {
                const isActive = activeLink === item.href;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative text-[13px] uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer group`}
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {/* Active/Hover text color */}
                    <span 
                      className={`relative z-10 transition-all duration-300 ${
                        isActive 
                          ? "text-white" 
                          : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                    
                    {/* Background highlight on hover/active */}
                    <motion.span
                      className="absolute inset-0 rounded-md -z-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(236,72,153,0.3), rgba(168,85,247,0.3))",
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Animated underline */}
                    <span
                      className={`absolute left-0 bottom-[-2px] h-[2px] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      style={{
                        background: "linear-gradient(90deg, #ec4899, #a855f7, #6366f1)",
                      }}
                    />
                    
                    {/* Glow dot for active item */}
                    {isActive && (
                      <motion.span
                        className="absolute -right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                        style={{
                          background: "linear-gradient(135deg, #ec4899, #a855f7)",
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Separator */}
              <div 
                className="w-[1px] h-5" 
                style={{
                  background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
              />

              {/* CTA Button */}
              <motion.button
                ref={ctaRef}
                onClick={handleCTAClick}
                className="relative px-5 py-2 overflow-hidden cursor-pointer"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  borderRadius: "20px",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background gradient */}
                <motion.span
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, #ec4899, #a855f7)",
                    borderRadius: "20px",
                  }}
                  whileHover={{
                    background: "linear-gradient(135deg, #f472b6, #c084fc)",
                  }}
                />
                
                {/* Shine effect */}
                <motion.span
                  className="absolute inset-0 opacity-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
                    borderRadius: "20px",
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Border glow */}
                <motion.span
                  className="absolute inset-0 rounded-[20px]"
                  style={{
                    boxShadow: "0 0 20px rgba(236,72,153,0.5), inset 0 0 10px rgba(255,255,255,0.1)",
                  }}
                  whileHover={{
                    boxShadow: "0 0 30px rgba(236,72,153,0.7), inset 0 0 15px rgba(255,255,255,0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Button text */}
                <span 
                  className="relative z-10 text-[12px] uppercase tracking-[0.15em] font-semibold text-white"
                >
                  Hire Me
                </span>
              </motion.button>
            </div>

            {/* Mobile Hamburger */}
            <button
              ref={hamburgerRef}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line w-6 h-0.5 bg-[#F5F0E8] block" />
              <span className="hamburger-line w-6 h-0.5 bg-[#F5F0E8] block" />
              <span className="hamburger-line w-6 h-0.5 bg-[#F5F0E8] block" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
