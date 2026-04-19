
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Download, Globe } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProfileCard() {
  const avatar = PlaceHolderImages.find((img) => img.id === "avatar");

  return (
    <div className="bg-[#111113] rounded-2xl p-6 border border-white/5 space-y-6 shadow-2xl">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-zinc-900">
        <Image
          src={avatar?.imageUrl || "https://picsum.photos/seed/folioprofile/400/400"}
          alt="Profile"
          fill
          className="object-cover"
          data-ai-hint="professional profile"
        />
      </div>
      
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold font-headline text-white">Alex Rivera</h1>
        <div className="space-y-1">
          <p className="text-zinc-400 font-medium">Senior Product Designer & Developer</p>
          <p className="text-zinc-500 text-sm">New York, NY</p>
        </div>
      </div>

      <div className="flex justify-center gap-3">
        {[
          { icon: Globe, href: "#" },
          { icon: Twitter, href: "#" },
          { icon: Linkedin, href: "#" },
          { icon: Mail, href: "#" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-primary/20 hover:border-primary/50 transition-all text-zinc-400 hover:text-white"
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>

      <div className="pt-2">
        <Button className="w-full h-12 rounded-xl text-base font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover-scale bg-primary hover:bg-primary/90 transition-all duration-300">
          Let's Talk
        </Button>
      </div>

      <div className="pt-4 border-t border-white/5">
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Available for projects</span>
        </div>
      </div>
    </div>
  );
}
