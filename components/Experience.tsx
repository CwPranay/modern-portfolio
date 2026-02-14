'use client';

import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaGithub } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'Personal Projects & Portfolio',
      period: '2024 - Present',
      icon: FaCode,
      description: 'Building production-ready applications with Next.js and MERN stack, focusing on scalable architecture and real-world problem solving.',
      contributions: [
        'Built AplyO: Full-stack MERN job application tracking platform with JWT authentication, RESTful APIs, and dashboard UI',
        'Created Gym Website: Performance-optimized fitness business website with mobile-first design and modern UI',
        'Developed FixMyArea: Bilingual community issue reporting system with real-time updates using Next.js and MongoDB',
        'Built AgroInsight: Data-driven dashboard for farmers with API integration, caching, and Chart.js visualizations',
        'Created OpenDesk: GitHub-integrated collaboration platform with Clerk authentication and task management'
      ],
      stack: 'Next.js, React, Node.js, Express, MongoDB, TypeScript, JWT, REST APIs, Tailwind CSS'
    },
    {
      role: 'Frontend Developer',
      company: 'Learning & Skill Development',
      period: '2023 - 2024',
      icon: FaPalette,
      description: 'Started web development journey during BSc IT, mastering React, Next.js, and modern frontend practices.',
      contributions: [
        'Learned React fundamentals, component architecture, and state management patterns',
        'Mastered Next.js App Router, server components, and performance optimization techniques',
        'Built responsive interfaces using Tailwind CSS and modern UI/UX principles',
        'Practiced API integration, data fetching, and client-server communication'
      ],
      stack: 'Next.js, React, TypeScript, Tailwind CSS, Responsive Design, UI/UX'
    },
    {
      role: 'Open-Source & Version Control',
      company: 'GitHub & Collaboration',
      period: '2024 - Present',
      icon: FaGithub,
      description: 'Learning professional development workflows, version control, and code collaboration practices.',
      contributions: [
        'Maintained projects on GitHub with proper version control and documentation',
        'Practiced Git workflows: branching, merging, pull requests, and conflict resolution',
        'Studied open-source codebases to understand industry-standard project structure',
        'Deployed applications to Vercel with CI/CD pipelines and environment management'
      ],
      stack: 'Git, GitHub, Vercel, CI/CD, Documentation, Code Review'
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mb-4">
            Experience & Learning
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl">
            Building real-world projects and developing professional skills as a BSc IT student.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827] border border-[#1F2933] rounded-xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#2563EB] rounded-lg">
                  <exp.icon className="text-xl text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#E5E7EB]">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-[#9CA3AF]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#2563EB] font-medium mb-3">{exp.company}</p>
                </div>
              </div>

              <p className="mb-4 text-[#9CA3AF] leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-medium text-[#6B7280] mb-3">Key Contributions</p>
                <ul className="space-y-2">
                  {exp.contributions.map((contribution, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#9CA3AF] text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#1F2933]">
                <p className="text-xs mb-2 font-medium uppercase tracking-wider text-[#6B7280]">
                  Tech Stack
                </p>
                <p className="text-sm text-[#9CA3AF]">
                  {exp.stack}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-4 bg-[#111827] border border-[#1F2933] rounded-xl">
            <p className="text-[#9CA3AF]">
              <span className="font-bold text-[#E5E7EB]">BSc IT Student</span> • 2023 - 2026 • Final Year
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
