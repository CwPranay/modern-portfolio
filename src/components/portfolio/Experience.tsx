"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      company: "Personal Projects & Portfolio",
      role: "Full-Stack Developer",
      period: "2024 — Present",
      description: "Building production-ready applications with Next.js and MERN stack, focusing on scalable architecture and real-world problem solving.",
      contributions: [
        "Built AplyO: Full-stack MERN job application tracking platform with JWT authentication, RESTful APIs, and dashboard UI",
        "Created Gym Website: Performance-optimized fitness business website with mobile-first design and modern UI",
        "Developed FixMyArea: Bilingual community issue reporting system with real-time updates using Next.js and MongoDB",
        "Built AgroInsight: Data-driven dashboard for farmers with API integration, caching, and Chart.js visualizations",
        "Created OpenDesk: GitHub-integrated collaboration platform with Clerk authentication and task management"
      ],
      stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "TypeScript", "JWT", "REST APIs", "Tailwind CSS"]
    },
    {
      company: "Learning & Skill Development",
      role: "Frontend Developer",
      period: "2023 — 2024",
      description: "Started web development journey during BSc IT, mastering React, Next.js, and modern frontend practices.",
      contributions: [
        "Learned React fundamentals, component architecture, and state management patterns",
        "Mastered Next.js App Router, server components, and performance optimization techniques",
        "Built responsive interfaces using Tailwind CSS and modern UI/UX principles",
        "Practiced API integration, data fetching, and client-server communication"
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design", "UI/UX"]
    },
    {
      company: "GitHub & Collaboration",
      role: "Open-Source & Version Control",
      period: "2024 — Present",
      description: "Learning professional development workflows, version control, and code collaboration practices.",
      contributions: [
        "Maintained projects on GitHub with proper version control and documentation",
        "Practiced Git workflows: branching, merging, pull requests, and conflict resolution",
        "Studied open-source codebases to understand industry-standard project structure",
        "Deployed applications to Vercel with CI/CD pipelines and environment management"
      ],
      stack: ["Git", "GitHub", "Vercel", "CI/CD", "Documentation", "Code Review"]
    }
  ];

  return (
    <section id="experience" className="space-y-12 scroll-mt-20">
      <ScrollReveal>
        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Career & Learning</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-headline">Experience</h2>
        </div>
      </ScrollReveal>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group p-8 bg-card border border-white/5 rounded-3xl hover:border-primary/20 transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-white font-headline group-hover:text-primary transition-colors">{exp.role}</h4>
                  <p className="text-zinc-500 font-medium text-lg">{exp.company}</p>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-bold text-zinc-400 w-fit">
                  {exp.period}
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {exp.description}
                </p>
                
                <div className="space-y-3">
                  <h5 className="text-sm font-bold text-white uppercase tracking-widest">Key Contributions</h5>
                  <ul className="grid grid-cols-1 gap-2 text-zinc-500 text-sm">
                    {exp.contributions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.stack.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[10px] uppercase font-bold text-zinc-500 border-white/5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
