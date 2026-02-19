"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Code, Layers, Zap } from "lucide-react";

type Service = {
  _id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
  features?: string[];
};

const serviceIcons: Record<string, React.ReactNode> = {
  palette: <Palette className="w-7 h-7" />,
  code: <Code className="w-7 h-7" />,
  layers: <Layers className="w-7 h-7" />,
};

const serviceGlows: Record<string, string> = {
  palette: "from-pink-500 to-rose-500",
  code: "from-purple-500 to-indigo-500",
  layers: "from-cyan-500 to-blue-500",
};

export default function ServicesGrid({ services }: { services: Service[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={service._id}
          service={service}
          index={index}
          icon={serviceIcons[service.icon] || <Code className="w-7 h-7" />}
          glowColor={serviceGlows[service.icon] || "from-pink-500 to-purple-500"}
          isHovered={hoveredIndex === index}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
}

// 3D Service Card Component
function ServiceCard({
  service,
  index,
  icon,
  glowColor,
  isHovered,
  onHover,
  onLeave,
}: {
  service: Service;
  index: number;
  icon: React.ReactNode;
  glowColor: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="relative cursor-pointer"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      {/* Animated Background Glow */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${glowColor}`}
        style={{ filter: "blur(20px)" }}
        animate={{
          opacity: isHovered ? 0.4 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* 3D Shadow Layer */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(236,72,153,0.3), rgba(168,85,247,0.3))",
          transform: "translateZ(-40px)",
          filter: "blur(20px)",
          opacity: isHovered ? 0.6 : 0,
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Card */}
      <motion.div
        className="relative p-8 rounded-2xl border h-full"
        style={{
          background: isHovered 
            ? "linear-gradient(135deg, rgba(20,20,20,0.9), rgba(10,10,10,0.95))"
            : "rgba(255,255,255,0.02)",
          borderColor: isHovered 
            ? "rgba(236,72,153,0.4)"
            : "rgba(255,255,255,0.08)",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: isHovered ? -8 : 0,
          rotateY: isHovered ? 0 : 0,
          translateZ: isHovered ? 20 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Floating Icon Container */}
        <motion.div
          className="relative mb-6"
          animate={{
            y: isHovered ? -8 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon Glow */}
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${glowColor}`}
            style={{ filter: "blur(15px)", opacity: isHovered ? 0.5 : 0 }}
            animate={{
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Icon Box */}
          <div 
            className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: isHovered
                ? "linear-gradient(135deg, rgba(236,72,153,0.3), rgba(168,85,247,0.3))"
                : "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: isHovered 
                ? "0 0 30px rgba(236,72,153,0.3), inset 0 0 20px rgba(255,255,255,0.05)"
                : "none",
            }}
          >
            <span className={`text-white bg-gradient-to-r ${glowColor} bg-clip-text text-transparent`}>
              {icon}
            </span>
          </div>

          {/* Floating particles on hover */}
          {isHovered && (
            <>
              <motion.div
                className={`absolute -top-2 -right-2 w-2 h-2 rounded-full bg-gradient-to-r ${glowColor}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className={`absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-r ${glowColor}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </>
          )}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-xl font-medium text-white mb-3"
          style={{
            fontFamily: "var(--font-clash-display), sans-serif",
          }}
          animate={{
            color: isHovered ? "#ffffff" : "rgba(255,255,255,0.9)",
          }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-white/60 text-sm mb-6 leading-relaxed"
          animate={{
            color: isHovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
          }}
          transition={{ duration: 0.3 }}
        >
          {service.description}
        </motion.p>

        {/* Price */}
        {service.price && (
          <motion.div
            className="mt-auto"
            animate={{
              y: isHovered ? -4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: isHovered
                  ? "linear-gradient(135deg, rgba(236,72,153,0.2), rgba(168,85,247,0.2))"
                  : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Zap className={`w-4 h-4 bg-gradient-to-r ${glowColor} bg-clip-text text-transparent`} />
              <span className="text-sm font-medium text-white/80">
                {service.price}
              </span>
            </div>
          </motion.div>
        )}

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-4 right-4 w-20 h-20 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)`,
          }}
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.3, 0.6, 0.3] : 0.1,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
          <div 
            className={`absolute top-2 left-2 w-3 h-3 rounded-full bg-gradient-to-r ${glowColor}`}
            style={{ opacity: isHovered ? 1 : 0.3 }}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
          <div 
            className={`absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r ${glowColor}`}
            style={{ opacity: isHovered ? 1 : 0.3 }}
          />
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
