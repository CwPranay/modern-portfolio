"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const stats = [
    { label: "PROJECTS COMPLETED", value: "5+" },
    { label: "TECHNOLOGIES", value: "10+" },
    { label: "YEARS LEARNING", value: "2+" },
  ];

  const headline = "Transforming Your Ideas into Reality";
  const words = headline.split(" ");

  return (
    <section id="hero" className="flex flex-col justify-start items-start space-y-16 pt-12 md:pt-20">
      <div className="space-y-12 w-full text-left">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-headline leading-[1.1] tracking-tight text-white flex flex-wrap">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className={`mr-3 ${word === "Reality" ? "text-primary" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <ScrollReveal delay={0.4}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-body">
              Specializing in Next.js and the MERN stack. I build scalable, production-ready applications focusing on clean architecture and modern best practices.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6}>
          <div className="flex flex-wrap gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-4xl md:text-5xl font-bold text-white font-headline">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <div className="flex items-center gap-6">
            <a href="#projects">
              <Button 
                className="bg-primary hover:bg-primary/90 hover:brightness-110 text-white font-bold px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-95 text-base h-auto"
              >
                View Projects
              </Button>
            </a>
            <a href="#contact" className="group flex items-center gap-2 text-white font-bold transition-all duration-300 hover:text-primary text-base">
              Get In Touch 
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={1.0} className="w-full">
        <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-6">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Currently Working On</p>
            <div className="flex flex-wrap items-center gap-10 opacity-60">
               <div className="flex items-center gap-3 text-white font-bold text-xl">
                 <span>Full-Stack Projects</span>
               </div>
               <div className="flex items-center gap-3 text-white font-bold text-xl">
                 <span>Building Production Apps</span>
               </div>
               <div className="flex items-center gap-3 text-white font-bold text-xl">
                 <span>Learning AI/ML</span>
               </div>
               <div className="flex items-center gap-3 text-white font-bold text-xl">
                 <span>Exploring Tech</span>
               </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
