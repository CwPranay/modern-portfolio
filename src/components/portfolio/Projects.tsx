
"use client";

import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "FixMyArea",
      description: "A bilingual community issue reporting system with real-time status tracking, empowering citizens to report problems and hold authorities accountable.",
      highlight: "Implemented real-time issue updates using MongoDB Change Streams with Next.js App Router.",
      tags: ["Next.js", "Node.js", "MongoDB", "Express", "i18next"],
      image: "https://picsum.photos/seed/fixmyarea/800/600",
      live: "#",
      github: "#",
    },
    {
      title: "AgroInsight",
      description: "A crop-price and weather dashboard for farmers, integrating external APIs with caching for reliability.",
      highlight: "Built with Next.js App Router for scalable rendering and optimized data fetching with server-side caching.",
      tags: ["Next.js", "TypeScript", "Docker", "Chart.js"],
      image: "https://picsum.photos/seed/agro/800/600",
      live: "#",
      github: "#",
    },
    {
      title: "OpenDesk",
      description: "A collaboration platform where developers can find real-world projects and contribute via GitHub pull requests.",
      highlight: "Implemented secure project ownership and task-based collaboration using Clerk authentication.",
      tags: ["Next.js", "Node.js", "MongoDB", "Clerk"],
      image: "https://picsum.photos/seed/opendesk/800/600",
      live: "#",
      github: "#",
    },
    {
      title: "AplyO",
      description: "A frontend-based job application tracking tool using browser storage for data persistence.",
      highlight: "Built with vanilla JavaScript and LocalStorage for offline-friendly job tracking.",
      tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      image: "https://picsum.photos/seed/aplyo/800/600",
      live: "#",
      github: "#",
    },
    {
      title: "Gym Website",
      description: "A responsive, modern gym and fitness website with clean UI, mobile-first design, and performance optimization.",
      highlight: "Built with modern web standards focusing on Core Web Vitals and mobile responsiveness.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://picsum.photos/seed/gym/800/600",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="space-y-12 scroll-mt-20">
      <ScrollReveal>
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Portfolio</h3>
            <h2 className="text-3xl font-bold text-white font-headline">Featured Projects</h2>
          </div>
          <a href="https://github.com/Cwpranay" target="_blank" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group font-bold">
            All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </ScrollReveal>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-8 bg-[#111113] border border-white/5 rounded-3xl overflow-hidden shadow-2xl hover:border-primary/20 transition-all duration-500">
              <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="project screenshot"
                />
              </div>
              <div className="p-8 lg:p-12 space-y-6 flex flex-col justify-center">
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold text-white font-headline">{project.title}</h4>
                  <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>
                </div>
                
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Technical Highlight</p>
                  <p className="text-zinc-300 italic text-sm">"{project.highlight}"</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-white/10 text-zinc-400 bg-white/5">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a href={project.live} className="flex items-center gap-2 text-white font-bold bg-primary px-6 py-2.5 rounded-xl hover:brightness-110 transition-all">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-white font-bold bg-white/5 border border-white/5 px-6 py-2.5 rounded-xl hover:bg-white/10 transition-all">
                    <Github size={18} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
