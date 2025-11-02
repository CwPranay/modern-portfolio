'use client';

import { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { toggleTheme, getCurrentTheme, type Theme } from '@/lib/theme';

/**
 * Optimized theme toggle - no re-renders, instant switching
 * Only this button re-renders, not the entire app
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Get initial theme from DOM (already set by ThemeScript)
    setTheme(getCurrentTheme());

    // Listen for theme changes from other sources
    const handleThemeChange = (e: CustomEvent<{ theme: Theme }>) => {
      setTheme(e.detail.theme);
    };

    window.addEventListener('themechange', handleThemeChange as EventListener);
    return () => window.removeEventListener('themechange', handleThemeChange as EventListener);
  }, []);

  const handleToggle = () => {
    const newTheme = toggleTheme(true); // smooth = true for button animation only
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="relative w-16 h-8 rounded-full theme-toggle-button hover:scale-105"
      style={{
        backgroundColor: theme === 'dark' ? '#1e293b' : '#e2e8f0',
      }}
      aria-label="Toggle theme"
    >
      {/* Sliding circle */}
      <div
        className="absolute top-1 w-6 h-6 rounded-full shadow-lg theme-toggle-slider flex items-center justify-center"
        style={{
          left: theme === 'dark' ? '4px' : 'calc(100% - 28px)',
          backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
        }}
      >
        {theme === 'dark' ? (
          <HiMoon className="w-4 h-4 text-blue-400" />
        ) : (
          <HiSun className="w-4 h-4 text-amber-500" />
        )}
      </div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <HiMoon 
          className="w-3.5 h-3.5 transition-opacity duration-200"
          style={{ 
            color: theme === 'dark' ? '#64748b' : '#94a3b8',
            opacity: theme === 'dark' ? 0.5 : 0.3
          }}
        />
        <HiSun 
          className="w-3.5 h-3.5 transition-opacity duration-200"
          style={{ 
            color: theme === 'light' ? '#f59e0b' : '#64748b',
            opacity: theme === 'light' ? 0.5 : 0.3
          }}
        />
      </div>
    </button>
  );
}
