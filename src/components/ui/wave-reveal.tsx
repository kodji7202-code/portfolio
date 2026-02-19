"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface WaveRevealProps {
  text: string;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function WaveReveal({
  text,
  duration = 1000,
  className = "",
  direction = "up",
}: WaveRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 20, opacity: 0 };
      case "down":
        return { y: -20, opacity: 0 };
      case "left":
        return { x: 20, opacity: 0 };
      case "right":
        return { x: -20, opacity: 0 };
      default:
        return { y: 20, opacity: 0 };
    }
  };

  const letters = text.split("");

  return (
    <div ref={containerRef} className={`inline-block overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        style={{
          flexDirection: direction === "left" || direction === "right" ? "row" : "column",
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={getInitialPosition()}
            animate={isVisible ? { y: 0, x: 0, opacity: 1 } : getInitialPosition()}
            transition={{
              duration: duration / 1000,
              delay: (index * duration) / 1000 / letters.length,
              ease: "easeOut",
            }}
            className="inline-block"
            style={{
              whiteSpace: letter === " " ? "pre" : "normal",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
