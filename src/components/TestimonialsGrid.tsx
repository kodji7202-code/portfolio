"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  _id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: {
    url: string;
  };
  rating?: number;
  company?: string;
};

export default function TestimonialsGrid({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Testimonials Grid - 3D Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial._id}
            testimonial={testimonial}
            index={index}
            isActive={currentIndex === index}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <motion.button
          onClick={prevSlide}
          className="p-4 border border-white/10 hover:border-white/30 transition-colors rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <motion.button
          onClick={nextSlide}
          className="p-4 border border-white/10 hover:border-white/30 transition-colors rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </>
  );
}

// 3D Testimonial Card Component
function TestimonialCard({
  testimonial,
  index,
  isActive,
  isHovered,
  onHover,
  onLeave,
  onClick,
}: {
  testimonial: Testimonial;
  index: number;
  isActive: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const avatarUrl = testimonial.avatar?.url || "/placeholder.jpg";

  return (
    <motion.div
      className="relative cursor-pointer"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* 3D Shadow Layer */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(236,72,153,0.4), rgba(168,85,247,0.4))",
          transform: "translateZ(-30px)",
          filter: "blur(15px)",
          opacity: isHovered ? 0.8 : 0,
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Card */}
      <motion.div
        className="relative p-6 rounded-2xl border"
        style={{
          background: isHovered || isActive
            ? "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(168,85,247,0.1))"
            : "rgba(255,255,255,0.02)",
          borderColor: isHovered || isActive
            ? "rgba(236,72,153,0.5)"
            : "rgba(255,255,255,0.1)",
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: isHovered ? -5 : 0,
          rotateY: isHovered ? 5 : 0,
          boxShadow: isHovered 
            ? "0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(236,72,153,0.2)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Quote Icon */}
        <motion.div
          className="mb-4"
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 10 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(236,72,153,0.2), rgba(168,85,247,0.2))",
              border: "1px solid rgba(236,72,153,0.3)",
            }}
          >
            <Quote className="w-6 h-6 text-pink-400" />
          </div>
        </motion.div>

        {/* Quote Text */}
        <motion.p
          className="text-white/80 mb-6 leading-relaxed text-sm"
          animate={{
            color: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.8)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </motion.p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <motion.div
            className="relative"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="w-12 h-12 rounded-full overflow-hidden border-2"
              style={{
                borderColor: isHovered ? "rgba(236,72,153,0.8)" : "rgba(255,255,255,0.2)",
              }}
            >
              <Image
                src={avatarUrl}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Glow effect on hover */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  background: "radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)",
                }}
              />
            )}
          </motion.div>
          
          <div>
            <motion.div
              className="font-medium text-white"
              animate={{
                color: isHovered ? "#ffffff" : "rgba(255,255,255,0.9)",
              }}
              transition={{ duration: 0.3 }}
            >
              {testimonial.name}
            </motion.div>
            <motion.div
              className="text-sm"
              animate={{
                color: isHovered ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.6)",
              }}
              transition={{ duration: 0.3 }}
            >
              {testimonial.role}
            </motion.div>
          </div>
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
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
            }}
          />
        </motion.div>

        {/* Active indicator */}
        {isActive && (
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 rounded-full"
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
      </motion.div>
    </motion.div>
  );
}
