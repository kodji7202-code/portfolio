"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import portfolioData from "@/data/portfolio";

export default function Hero() {
  const { name, title, tagline } = portfolioData;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        {/* Enhanced Motion Background - Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large glowing orb 1 - Indigo */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0.3) 40%, transparent 70%)",
              filter: "blur(20px)",
              top: "5%",
              left: "5%",
            }}
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Large glowing orb 2 - Purple */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "350px",
              height: "350px",
              background: "radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(168,85,247,0.3) 40%, transparent 70%)",
              filter: "blur(20px)",
              top: "50%",
              right: "5%",
            }}
            animate={{
              x: [0, -60, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />
          
          {/* Large glowing orb 3 - Pink */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, rgba(236,72,153,0.6) 0%, rgba(236,72,153,0.3) 40%, transparent 70%)",
              filter: "blur(20px)",
              bottom: "10%",
              left: "30%",
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10,
            }}
          />
          
          {/* Animated Grid Pattern */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <HoverText>
              <span className="inline-block text-sm font-medium text-white/60 mb-6 tracking-widest uppercase">
                Hello, I&apos;m {name}
              </span>
            </HoverText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <TitleHoverEffect text={title} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <HoverText>
              <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                {tagline}
              </p>
            </HoverText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <ThreeDButton
              onClick={() => scrollToSection("#projects")}
              variant="primary"
            >
              View Projects
            </ThreeDButton>

            <ThreeDButton
              onClick={() => scrollToSection("#contact")}
              variant="secondary"
            >
              GetIn Touch
            </ThreeDButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("#about")}
            className="p-2 text-white/40 hover:text-white/60 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}

// Simple Title Hover Effect (replaces TextHoverEffect)
function TitleHoverEffect({ text }: { text: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.h1
      className="text-6xl md:text-8xl font-bold text-white cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Main text */}
      <span className="relative z-10">{text}</span>
      
      {/* Glow effect on hover */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          textShadow: "0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.3)",
        }}
      >
        {text}
      </motion.span>
      
      {/* Bottom border line */}
      <motion.div
        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.h1>
  );
}

// Enhanced Hover Text Component
function HoverText({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main text */}
      <motion.span
        animate={{
          color: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.6)",
          textShadow: isHovered 
            ? "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)" 
            : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
      
      {/* Glow effect on hover */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          transform: "skewX(-20deg)",
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Underline effect */}
      <motion.div
        className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
        initial={{ width: "0%" }}
        animate={{
          width: isHovered ? "100%" : "0%",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}

// 3D Button Component with enhanced effects
function ThreeDButton({
  onClick,
  children,
  variant = "primary",
}: {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isPrimary = variant === "primary";

  return (
    <motion.div
      className="relative"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
    >
      {/* 3D Shadow Layer */}
      <motion.div
        className={`absolute inset-0 rounded-lg ${
          isPrimary 
            ? "bg-gradient-to-br from-gray-600 to-gray-800" 
            : "bg-gradient-to-br from-white/10 to-white/5"
        }`}
        style={{
          transform: "translateZ(-20px)",
          filter: "blur(10px)",
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.4,
          scale: isHovered ? 1.05 : 1,
          x: isPressed ? 4 : (isHovered ? 2 : 0),
          y: isPressed ? 4 : (isHovered ? 2 : 0),
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* 3D Button Layer */}
      <motion.button
        onClick={onClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        className={`relative px-8 py-4 rounded-lg font-medium ${
          isPrimary
            ? "bg-white text-black"
            : "border border-white/30 text-white bg-transparent"
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          transform: isPressed 
            ? "translateZ(0px) rotateX(5deg)" 
            : isHovered 
              ? "translateZ(15px)" 
              : "translateZ(0px)",
          boxShadow: isHovered
            ? isPrimary
              ? "0 20px 40px rgba(0,0,0,0.3), 0 0 60px rgba(255,255,255,0.2)"
              : "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.1)"
            : isPrimary
              ? "0 4px 15px rgba(0,0,0,0.2)"
              : "0 4px 15px rgba(255,255,255,0.1)",
        }}
        whileHover={{
          backgroundColor: isPrimary ? "#e5e5e5" : "rgba(255,255,255,0.1)",
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Shiny effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
            }}
          />
        </motion.div>
        
        {/* Button text with 3D depth */}
        <span className="relative z-10" style={{ transform: "translateZ(10px)" }}>
          {children}
        </span>
      </motion.button>
    </motion.div>
  );
}
