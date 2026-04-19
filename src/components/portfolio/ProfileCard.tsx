"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export function ProfileCard() {
  const avatar = PlaceHolderImages.find((img) => img.id === "avatar");
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // for glow position
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 150 });
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 150 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  useEffect(() => {
    // Detect if device is mobile/touch
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;

    const rect = cardRef.current.getBoundingClientRect();

    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;

    x.set(xPct - 0.5);
    y.set(yPct - 0.5);

    glowX.set(xPct * 100);
    glowY.set(yPct * 100);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <div className="perspective-[1200px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={isMobile ? {} : { scale: 1.02 }}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative bg-[#111113] rounded-2xl p-6 border border-white/5 space-y-6 shadow-xl transition-all duration-300"
      >
        {/* 🔥 Dynamic Glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(124,58,237,0.12), transparent 60%)`
            ),
            transform: "translateZ(20px)",
          }}
        />

        {/* IMAGE */}
        <div
          className="relative w-full aspect-square rounded-xl overflow-hidden bg-zinc-900"
          style={{ transform: "translateZ(60px)" }}
        >
          <Image
            src={
              avatar?.imageUrl ||
              "https://picsum.photos/seed/pranay/400/400"
            }
            alt="Pranay Gurav"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div
          className="space-y-2 text-center"
          style={{ transform: "translateZ(30px)" }}
        >
          <h1 className="text-3xl font-bold text-white">
            Pranay Gurav
          </h1>
          <p className="text-zinc-400">MERN Stack Developer</p>
          <p className="text-zinc-500 text-sm">Mumbai, India</p>
        </div>

        {/* SOCIAL LINKS (FIXED) */}
        <div
          className="flex justify-center gap-3"
          style={{ transform: "translateZ(20px)" }}
        >
          {[
            {
              icon: Github,
              href: "https://github.com/CwPranay",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/pranay-gurav",
            },
            {
              icon: FaXTwitter,
              href: "https://x.com/PranayyGurav",
            },
            {
              icon: Mail,
              href: "mailto:prngurav@gmail.com",
            },
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

        {/* CTA */}
        <div style={{ transform: "translateZ(50px)" }}>
          <a href="#contact">
            <Button className="w-full h-12 rounded-xl font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-[1.03] active:scale-[0.98] transition">
              Let's talk
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}