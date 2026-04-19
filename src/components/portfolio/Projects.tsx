"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FixMyArea",
    subtitle: "Community Reporting System",
    description: "A bilingual community issue reporting system with real-time status tracking.",
    image: "https://picsum.photos/seed/fixmyarea/800/600",
    live: "#",
    github: "https://github.com/Cwpranay",
  },
  {
    title: "AgroInsight",
    subtitle: "Agri-Tech Dashboard",
    description: "A crop-price and weather dashboard for farmers, integrating external APIs with caching.",
    image: "https://picsum.photos/seed/agro/800/600",
    live: "#",
    github: "https://github.com/Cwpranay",
  },
  {
    title: "OpenDesk",
    subtitle: "Developer Collaboration",
    description: "A platform where developers find real-world projects and contribute via GitHub.",
    image: "https://picsum.photos/seed/opendesk/800/600",
    live: "#",
    github: "https://github.com/Cwpranay",
  },
  {
    title: "AplyO",
    subtitle: "Job Application Tracker",
    description: "A frontend-based tool using browser storage for offline job tracking.",
    image: "https://picsum.photos/seed/aplyo/800/600",
    live: "#",
    github: "https://github.com/Cwpranay",
  },
  {
    title: "Gym Website",
    subtitle: "Modern Fitness UI",
    description: "A responsive, modern gym and fitness website with clean UI and mobile-first design.",
    image: "https://picsum.photos/seed/gym/800/600",
    live: "#",
    github: "https://github.com/Cwpranay",
  },
];

export function Projects() {
  return (
    <section id="projects" className="space-y-16 scroll-mt-20">
      <ScrollReveal>
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white font-headline leading-tight tracking-tight">
            Recent Projects <br />
            and <span className="text-primary">Achievements</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((project, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group flex flex-col bg-[#161618] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-primary/20"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="project screenshot"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.live} 
                    className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.github} 
                    className="p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:scale-110 transition-transform border border-white/10"
                    title="Source Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-2">
                <h4 className="text-3xl font-bold text-white font-headline tracking-tight">{project.title}</h4>
                <p className="text-zinc-500 font-medium text-lg leading-snug">{project.subtitle}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="pt-8">
        <div className="flex justify-center">
          <a 
            href="https://github.com/Cwpranay" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-white font-bold bg-white/5 border border-white/5 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 hover-scale"
          >
            Visit My GitHub
            <Github size={20} className="transition-transform group-hover:rotate-12" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
