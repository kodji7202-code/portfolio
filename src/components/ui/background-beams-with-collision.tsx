"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BackgroundBeamsWithCollisionProps {
  children: React.ReactNode;
  className?: string;
}

export function BackgroundBeamsWithCollision({
  children,
  className = "",
}: BackgroundBeamsWithCollisionProps) {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Beams */}
      <Beams />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

function Beams() {
  const beams = [
    { initialX: 10, translateX: 10 },
    { initialX: 30, translateX: 30 },
    { initialX: 50, translateX: 50 },
    { initialX: 70, translateX: 70 },
    { initialX: 90, translateX: 90 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {beams.map((beam, i) => (
        <Beam key={i} initialX={beam.initialX} />
      ))}
    </div>
  );
}

function Beam({ initialX }: { initialX: number }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      initial={{ x: `${initialX}%`, y: "-100%" }}
      animate={{ y: "200%" }}
      transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
      }}
      className="absolute w-px h-[50vh] bg-gradient-to-b from-transparent via-white/20 to-transparent"
      style={{
        left: `${initialX}%`,
      }}
    />
  );
}

export default BackgroundBeamsWithCollision;
