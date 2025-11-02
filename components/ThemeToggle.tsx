'use client';

import { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
        document.body.classList.add('light');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
      document.body.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.body.classList.remove('light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full transition-all duration-200 hover:scale-105"
      style={{
        backgroundColor: theme === 'dark' ? '#1e293b' : '#e2e8f0',
      }}
      aria-label="Toggle theme"
    >
      {/* Sliding circle */}
      <div
        className="absolute top-1 w-6 h-6 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center"
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
      <div className="absolute inset-0 flex items-center justify-between px-2">
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
