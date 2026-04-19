
"use client";

import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="space-y-8 scroll-mt-20">
      <ScrollReveal>
        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Introduction</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">About Me</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              I'm Pranay Gurav, a Full-stack Developer based in Mumbai. I focus on building real-world applications using the MERN stack and Next.js, with a strong emphasis on clean code and user-centric design.
            </p>
            <p>
              My goal is to bridge the gap between complex backend logic and intuitive frontend experiences. Whether it's crafting scalable APIs or building interactive dashboards, I strive for excellence in every line of code.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-card border border-white/5 rounded-2xl space-y-4">
              <h4 className="text-white font-bold">Key Areas of Focus</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Full-stack MERN Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Next.js & Server Components
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  REST & GraphQL APIs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Database Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
