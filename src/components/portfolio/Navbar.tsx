
"use client";

import { Home, Folder, Wrench, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Folder, label: "Projects", href: "#projects" },
  { icon: Wrench, label: "Tools", href: "#tools" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] flex items-center bg-[#111113]/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 gap-2 sm:gap-4 shadow-2xl transition-all duration-300">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={() => setActive(item.label)}
          className={cn(
            "p-2 rounded-md transition-all duration-300 flex items-center justify-center relative",
            active === item.label 
              ? "bg-[#7C3AED] text-white" 
              : "text-zinc-400 hover:bg-white/5"
          )}
          title={item.label}
        >
          <item.icon size={18} />
        </a>
      ))}
    </nav>
  );
}
