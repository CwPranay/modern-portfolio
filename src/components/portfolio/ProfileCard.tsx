
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function ProfileCard() {
  const avatar = PlaceHolderImages.find((img) => img.id === "avatar");
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 40, stiffness: 200 });
  const mouseYSpring = useSpring(y, { damping: 40, stiffness: 200 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-[#111113] rounded-2xl p-6 border border-white/5 space-y-6 shadow-2xl transition-all duration-300"
    >
      <div 
        className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-zinc-900"
        style={{ transform: "translateZ(50px)" }}
      >
        <Image
          src={avatar?.imageUrl || "https://picsum.photos/seed/pranay/400/400"}
          alt="Pranay Gurav"
          fill
          className="object-cover"
          data-ai-hint="developer portrait"
        />
      </div>
      
      <div className="space-y-2 text-center" style={{ transform: "translateZ(30px)" }}>
        <h1 className="text-3xl font-bold font-headline text-white">Pranay Gurav</h1>
        <div className="space-y-1">
          <p className="text-zinc-400 font-medium">MERN Stack Developer</p>
          <p className="text-zinc-500 text-sm">Mumbai, India</p>
        </div>
      </div>

      <div className="flex justify-center gap-3" style={{ transform: "translateZ(20px)" }}>
        {[
          { icon: Github, href: "https://github.com" },
          { icon: Linkedin, href: "https://linkedin.com" },
          { icon: Twitter, href: "https://twitter.com" },
          { icon: Mail, href: "mailto:hello@pranay.dev" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-primary/20 hover:border-primary/50 transition-all text-zinc-400 hover:text-white"
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>

      <div className="pt-2" style={{ transform: "translateZ(40px)" }}>
        <Button className="w-full h-12 rounded-xl text-base font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-[1.03] active:scale-[0.98] bg-primary hover:bg-primary/90 transition-all duration-300">
          Let's Talk
        </Button>
      </div>

      <div className="pt-4 border-t border-white/5">
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Available for hire</span>
        </div>
      </div>
    </motion.div>
  );
}
