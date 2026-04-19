"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProfileCard } from "./ProfileCard";

export function Hero() {
  const stats = [
    { label: "PROJECTS COMPLETED", value: "5+" },
    { label: "TECHNOLOGIES", value: "10+" },
    { label: "YEARS BUILDING", value: "2+" },
  ];

  const headline = "Transforming Your Ideas into Reality";
  const words = headline.split(" ");

  return (
    <section id="hero" className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-16 pt-12 md:pt-20 min-h-screen md:min-h-[120vh]">
      <div className="space-y-6 md:space-y-12 w-full">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-semibold md:font-bold font-headline leading-tight md:leading-[1.1] tracking-tight text-white flex flex-wrap justify-center md:justify-start">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: "easeOut",
                }}
                className={`mr-3 ${word === "Reality" ? "text-primary" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <ScrollReveal delay={0.3}>
            <p className="text-sm md:text-xl text-zinc-400 max-w-sm md:max-w-xl mx-auto md:mx-0 leading-relaxed font-body">
              Specializing in Next.js and the MERN stack. I build scalable, production-ready applications focusing on clean architecture and modern best practices.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="flex justify-center md:justify-start flex-wrap gap-6 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl md:text-5xl font-bold text-white font-headline">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.7}>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 mt-6">
            <a href="#projects" className="w-full md:w-auto">
              <Button 
                className="w-full md:w-auto bg-primary hover:bg-primary/90 hover:brightness-110 text-white font-bold px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-95 text-base h-auto"
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

      {/* Mobile-only Profile Card - After Hero Info */}
      <ScrollReveal delay={0.9} className="md:hidden w-full">
        <div className="flex justify-center mt-8">
          <div className="max-w-[280px] w-full scale-95">
            <ProfileCard />
          </div>
        </div>
      </ScrollReveal>

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
