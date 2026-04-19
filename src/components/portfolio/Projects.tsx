
"use client";

import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Vivid Dashboard",
      category: "UI Design / Development",
      image: PlaceHolderImages.find(img => img.id === "project1")?.imageUrl,
      link: "#",
    },
    {
      title: "Solstice App",
      category: "Mobile Application",
      image: PlaceHolderImages.find(img => img.id === "project2")?.imageUrl,
      link: "#",
    },
    {
      title: "Nexus Analytics",
      category: "Branding / Web Design",
      image: PlaceHolderImages.find(img => img.id === "project3")?.imageUrl,
      link: "#",
    },
  ];

  return (
    <section id="projects" className="space-y-12">
      <ScrollReveal>
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Portfolio</h3>
            <h2 className="text-3xl font-bold text-white font-headline">Selected Projects</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
            View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-[#111113] border border-white/5 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image || `https://picsum.photos/seed/${i}/800/600`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-2">
                <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{project.category}</p>
                <h4 className="text-2xl font-bold text-white font-headline group-hover:text-primary transition-colors">{project.title}</h4>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
