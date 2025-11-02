'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiMongodb,
	SiExpress,
	SiTypescript,
	SiTailwindcss,
	SiMysql,
	SiDotnet,
	SiGit,
	SiPython,
	SiPandas,
	SiNumpy,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Skills() {
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

	const skills = [
		{ name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
		{
			name: 'Next.js',
			icon: SiNextdotjs,
			color: '#FFFFFF',
			category: 'Frontend',
		},
		{ name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
		{ name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
		{ name: 'Express', icon: SiExpress, color: '#FFFFFF', category: 'Backend' },
		{
			name: 'TypeScript',
			icon: SiTypescript,
			color: '#3178C6',
			category: 'Language',
		},
		{
			name: 'Tailwind',
			icon: SiTailwindcss,
			color: '#06B6D4',
			category: 'Frontend',
		},
		{ name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
		{ name: 'Java', icon: FaJava, color: '#007396', category: 'Language' },
		{ name: '.NET', icon: SiDotnet, color: '#512BD4', category: 'Backend' },
		{ name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
		{ name: 'Python', icon: SiPython, color: '#3776AB', category: 'Language' },
		{ name: 'Pandas', icon: SiPandas, color: '#150458', category: 'AI/ML' },
		{ name: 'NumPy', icon: SiNumpy, color: '#013243', category: 'AI/ML' },
	];

	return (
		<section id="skills" className="py-32 px-6 relative overflow-hidden">
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

			<div className="max-w-6xl mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-16 text-center"
				>
					<p className="text-sm font-medium text-zinc-400 mb-4 tracking-wider uppercase">
						Tech Stack
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Technologies I{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
							master
						</span>
					</h2>
					<p className="text-zinc-400 text-lg max-w-2xl mx-auto">
						Hover over each technology to see its category
					</p>
				</motion.div>

				<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.4,
								delay: index * 0.05,
							}}
							whileHover={{ y: -8 }}
							onHoverStart={() => setHoveredSkill(skill.name)}
							onHoverEnd={() => setHoveredSkill(null)}
							className="relative group cursor-pointer"
						>
							<div className="relative aspect-square border border-zinc-900 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-zinc-700 bg-black transition-all">
								<skill.icon
									className="text-3xl text-zinc-400 group-hover:text-white transition-colors"
									style={{
										color: hoveredSkill === skill.name ? skill.color : undefined,
									}}
								/>
								<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors text-center font-medium">
									{skill.name}
								</span>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{
										opacity: hoveredSkill === skill.name ? 1 : 0,
										y: hoveredSkill === skill.name ? 0 : 10,
									}}
									className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-400 whitespace-nowrap"
								>
									{skill.category}
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>

				
			</div>
		</section>
	);
}
