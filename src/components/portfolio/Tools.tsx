
"use client";

import { ScrollReveal } from "./ScrollReveal";
import { 
  Globe, 
  Code2, 
  Shield, 
  Wind, 
  Server, 
  Terminal, 
  Database, 
  Box, 
  GitBranch, 
  Coffee,
  Cpu,
  Binary
} from "lucide-react";

export function Tools() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", subtitle: "React Framework", icon: Globe },
        { name: "React", subtitle: "UI Library", icon: Code2 },
        { name: "TypeScript", subtitle: "Type Safety", icon: Shield },
        { name: "Tailwind CSS", subtitle: "Styling Engine", icon: Wind },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", subtitle: "Runtime Environment", icon: Server },
        { name: "Express", subtitle: "Backend Framework", icon: Terminal },
        { name: "MongoDB", subtitle: "NoSQL Database", icon: Database },
        { name: "MySQL", subtitle: "SQL Database", icon: Database },
        { name: ".NET", subtitle: "Application Framework", icon: Cpu },
      ],
    },
    {
      title: "DevOps & Languages",
      skills: [
        { name: "Docker", subtitle: "Containerization", icon: Box },
        { name: "Git", subtitle: "Version Control", icon: GitBranch },
        { name: "Python", subtitle: "General Purpose", icon: Binary },
        { name: "Java", subtitle: "Enterprise Language", icon: Coffee },
      ],
    },
  ];

  return (
    <section id="tools" className="space-y-16 scroll-mt-20">
      <ScrollReveal>
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white font-headline leading-tight tracking-tight">
            Top-Tier Tools for <br />
            Exceptional <span className="text-primary">Results</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-12">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-6">
            <h4 className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] px-2">
              {category.title}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <ScrollReveal key={i} delay={i * 0.05 + idx * 0.1}>
                  <div className="flex items-center gap-4 p-5 bg-[#161618] border border-white/5 rounded-2xl hover:border-primary/30 transition-all group">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                      <skill.icon className="text-black" size={24} />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white font-bold text-lg leading-tight">{skill.name}</h4>
                      <p className="text-zinc-500 text-sm font-medium">{skill.subtitle}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
