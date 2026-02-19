"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Eye } from "lucide-react";

type Project = {
  _id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={project._id}
          project={project}
          index={index}
          isHovered={hoveredIndex === index}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
}

// 3D Project Card Component
function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const thumbnailUrl = project.thumbnail?.url || "/placeholder.jpg";

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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Glow Background */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(236,72,153,0.4), rgba(168,85,247,0.4))",
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
        className="relative rounded-2xl overflow-hidden border"
        style={{
          background: "rgba(10,10,10,0.8)",
          borderColor: isHovered ? "rgba(236,72,153,0.5)" : "rgba(255,255,255,0.1)",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: isHovered ? -5 : 0,
          rotateY: isHovered ? 0 : 0,
          translateZ: isHovered ? 20 : 0,
          boxShadow: isHovered 
            ? "0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(236,72,153,0.15)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          {/* Image */}
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={thumbnailUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority={index < 3}
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.9) 100%)",
            }}
          />

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.2, backgroundColor: "rgba(236,72,153,0.5)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye className="w-5 h-5 text-white" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.2, backgroundColor: "rgba(236,72,153,0.5)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
            )}
          </motion.div>

          {/* Project Number Badge */}
          <motion.div
            className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(236,72,153,0.2)",
              border: "1px solid rgba(236,72,153,0.4)",
              backdropFilter: "blur(10px)",
            }}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <span 
              className="text-white font-bold"
              style={{ fontFamily: "var(--font-clash-display), sans-serif" }}
            >
              {index + 1}
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <motion.h3
            className="text-lg font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-clash-display), sans-serif" }}
            animate={{
              color: isHovered ? "#ffffff" : "rgba(255,255,255,0.95)",
            }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-white/60 text-sm mb-4 leading-relaxed"
            animate={{
              color: isHovered ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.6)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                  style={{
                    background: isHovered
                      ? "rgba(236,72,153,0.25)"
                      : "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(236,72,153,0.3)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                  whileHover={{ 
                    background: "rgba(236,72,153,0.4)",
                    scale: 1.05,
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.8), rgba(168,85,247,0.8), transparent)",
          }}
          animate={{
            scaleX: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

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

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 overflow-hidden">
          <div 
            className="absolute top-1 left-1 w-2 h-2 bg-pink-500"
            style={{ 
              opacity: isHovered ? 1 : 0.3,
              boxShadow: isHovered ? "0 0 10px #ec4899" : "none"
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-4 h-4 overflow-hidden">
          <div 
            className="absolute top-1 right-1 w-2 h-2 bg-purple-500"
            style={{ 
              opacity: isHovered ? 1 : 0.3,
              boxShadow: isHovered ? "0 0 10px #a855f7" : "none"
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-4 h-4 overflow-hidden">
          <div 
            className="absolute bottom-1 left-1 w-2 h-2 bg-indigo-500"
            style={{ 
              opacity: isHovered ? 1 : 0.3,
              boxShadow: isHovered ? "0 0 10px #6366f1" : "none"
            }}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-4 h-4 overflow-hidden">
          <div 
            className="absolute bottom-1 right-1 w-2 h-2 bg-pink-500"
            style={{ 
              opacity: isHovered ? 1 : 0.3,
              boxShadow: isHovered ? "0 0 10px #ec4899" : "none"
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
