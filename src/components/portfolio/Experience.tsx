
"use client";

import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  const experiences = [
    {
      company: "Freelance",
      role: "Full-stack Developer",
      period: "2023 — Present",
      description: "Developing custom web solutions for local startups, focusing on MERN stack and Next.js integrations.",
    },
    {
      company: "TechNova Solutions",
      role: "MERN Stack Developer (Intern)",
      period: "2022 — 2023",
      description: "Contributed to building reusable UI components and optimizing REST APIs for client-facing dashboards.",
    },
  ];

  return (
    <section id="experience" className="space-y-12 scroll-mt-20">
      <ScrollReveal>
        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Career</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Experience</h2>
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group p-8 bg-card border border-white/5 rounded-2xl hover:border-primary/20 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white font-headline group-hover:text-primary transition-colors">{exp.role}</h4>
                  <p className="text-zinc-500 font-medium">{exp.company}</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-bold text-zinc-400 w-fit h-fit">
                  {exp.period}
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed italic">
                {exp.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
