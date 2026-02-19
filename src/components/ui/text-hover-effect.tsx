"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface TextHoverEffectProps {
  text: string;
}

export function TextHoverEffect({ text }: TextHoverEffectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="text-6xl md:text-8xl font-bold text-white"
        animate={{
          opacity: isHovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.div>
      
      {/* Hover effect - creates a blur/mirror effect */}
      <motion.div
        className="absolute inset-0 text-6xl md:text-8xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 0.7 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          filter: "blur(8px)",
          transform: "scaleX(-1)",
        }}
      >
        {text}
      </motion.div>
      
      {/* Border effect on hover */}
      <motion.div
        className="absolute inset-0 border-b-2 border-white"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

export default TextHoverEffect;
