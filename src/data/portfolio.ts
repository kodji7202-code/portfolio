// Portfolio Data - Edit all content from this single file
export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export const portfolioData = {
  // Personal Info
  name: "Cojocaru Claudiu",
  title: "Full Stack Web Developer",
  tagline: "Building digital experiences that make a difference",
  email: "claudiu2169@gmail.com",
  
  // Navigation
  navItems: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ] as NavItem[],

  // About Section
  about: {
    bio: "I'm a passionate full-stack developer with 5+ years of experience building modern web applications. I love turning complex problems into simple, beautiful solutions. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },

  // Skills
  skills: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Node.js", icon: "nodejs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
  ] as Skill[],

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration.",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates.",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with beautiful charts.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Next.js", "Tailwind", "Chart.js", "API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Modern restaurant website with online reservations and menu display.",
      thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-first web app for tracking workouts and nutrition.",
      thumbnail: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
      tags: ["React Native", "TypeScript", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Content management system with markdown support and SEO optimization.",
      thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
      tags: ["Next.js", "MDX", "Tailwind", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ] as Project[],

  // Services
  services: [
    {
      id: 1,
      title: "Web Design",
      description: "Beautiful, user-centered designs that capture your brand essence and engage your audience.",
      icon: "palette",
      price: "Starting at $500",
    },
    {
      id: 2,
      title: "Web Development",
      description: "Fast, responsive websites built with modern technologies and best practices.",
      icon: "code",
      price: "Starting at $1,000",
    },
    {
      id: 3,
      title: "Full Stack Apps",
      description: "End-to-end application development from concept to deployment and beyond.",
      icon: "layers",
      price: "Starting at $3,000",
    },
  ] as Service[],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Williams",
      role: "CEO, TechStart",
      quote: "Cojocaru Claudiu delivered an exceptional website that exceeded our expectations. The attention to detail and smooth user experience has significantly increased our conversions.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      quote: "Working with Cojocaru Claudiu was a pleasure. He understood our requirements perfectly and delivered a robust solution on time. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Founder, DesignCo",
      quote: "Cojocaru Claudiu transformed our outdated site into a modern masterpiece. Our users love the new design and we've seen a 40% increase in engagement.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ] as Testimonial[],

  // Social Links
  socialLinks: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ] as SocialLink[],

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Cojocaru Claudiu. All rights reserved.`,
  },
};

export default portfolioData;
