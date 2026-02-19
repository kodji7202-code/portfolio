"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2, 
  Database, 
  FileType, 
  Layout, 
  Server, 
  Box 
} from "lucide-react";
import portfolioData from "@/data/portfolio";

const skillIcons: Record<string, React.ReactNode> = {
  react: <Code2 className="w-5 h-5" />,
  nextjs: <Layout className="w-5 h-5" />,
  typescript: <FileType className="w-5 h-5" />,
  tailwind: <Box className="w-5 h-5" />,
  nodejs: <Server className="w-5 h-5" />,
  mongodb: <Database className="w-5 h-5" />,
  postgresql: <Database className="w-5 h-5" />,
};

export default function About() {
  const { about, skills } = portfolioData;

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={{
        background: "#000000",
      }}
    >
      {/* Background Effects - Same as Hero */}
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
        
        {/* Animated Grid Pattern - Same as Hero */}
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 
            className="text-5xl md:text-7xl font-bold text-white relative inline-block"
            style={{
              fontFamily: "var(--font-clash-display), sans-serif",
            }}
          >
            <span className="relative z-10">About</span>
            <motion.span
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About
            </motion.span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{
                background: "linear-gradient(90deg, #ec4899, #a855f7, #6366f1)",
                borderRadius: "2px",
              }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 
              className="text-2xl md:text-3xl font-medium text-white mb-6"
              style={{
                fontFamily: "var(--font-clash-display), sans-serif",
              }}
            >
              Building digital{" "}
              <span 
                className="relative"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                experiences
              </span>
            </h3>
            <p className="text-white/60 leading-relaxed text-lg mb-8">
              {about.bio}
            </p>
            
            {/* Stats */}
            <div className="flex gap-8">
              {[
                { number: "5+", label: "Years Exp." },
                { number: "50+", label: "Projects" },
                { number: "30+", label: "Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div 
                    className="text-3xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, #ec4899, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "var(--font-clash-display), sans-serif",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 
              className="text-sm font-medium text-white/60 mb-6 uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
              }}
            >
              Skills
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index}
                  icon={skillIcons[skill.icon] || <Code2 className="w-5 h-5" />}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Skill Card Component with 3D Hover Effect
function SkillCard({ 
  skill, 
  index,
  icon 
}: { 
  skill: { name: string; icon: string };
  index: number;
  icon: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative"
      style={{
        perspective: "1000px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Shadow */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(236,72,153,0.3), rgba(168,85,247,0.3))",
          transform: "translateZ(-20px)",
          filter: "blur(10px)",
          opacity: isHovered ? 0.6 : 0,
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Main Card */}
      <motion.div
        className="relative p-4 rounded-xl border"
        style={{
          background: isHovered 
            ? "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(168,85,247,0.1))"
            : "rgba(255,255,255,0.02)",
          borderColor: isHovered 
            ? "rgba(236,72,153,0.5)"
            : "rgba(255,255,255,0.1)",
          transform: isHovered ? "translateZ(15px)" : "translateZ(0px)",
          transformStyle: "preserve-3d",
        }}
        animate={{
          boxShadow: isHovered 
            ? "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(236,72,153,0.2)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Floating Icon */}
        <motion.div
          className="mb-3"
          animate={{
            y: isHovered ? -5 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(236,72,153,0.2), rgba(168,85,247,0.2))",
              border: "1px solid rgba(236,72,153,0.3)",
            }}
          >
            <span className="text-white">
              {icon}
            </span>
          </div>
        </motion.div>
        
        {/* Skill Name */}
        <motion.span
          className="text-white font-medium block"
          animate={{
            color: isHovered ? "#ffffff" : "rgba(255,255,255,0.8)",
          }}
          transition={{ duration: 0.3 }}
        >
          {skill.name}
        </motion.span>
        
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
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
      </motion.div>
    </motion.div>
  );
}
