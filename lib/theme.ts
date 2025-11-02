/**
 * Ultra-fast theme management - no React state, no re-renders
 * Direct DOM manipulation for instant theme switching
 */

export type Theme = 'dark' | 'light';

// Get theme from localStorage or system preference
export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  
  const saved = localStorage.getItem('theme') as Theme | null;
  if (saved) return saved;
  
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

// Apply theme instantly without any transitions
export function applyTheme(theme: Theme): void {
  const html = document.documentElement;
  
  // Remove transition class if it exists
  html.classList.remove('theme-transitioning');
  
  // Apply theme class instantly
  if (theme === 'light') {
    html.classList.add('light');
  } else {
    html.classList.remove('light');
  }
  
  // Save to localStorage
  localStorage.setItem('theme', theme);
  
  // Dispatch custom event for components that need to react
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
}

// Toggle theme with optional smooth transition
export function toggleTheme(smooth = false): Theme {
  const html = document.documentElement;
  const currentTheme = html.classList.contains('light') ? 'light' : 'dark';
  const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';
  
  if (smooth) {
    // Add transition class only for the toggle button and small elements
    html.classList.add('theme-transitioning');
    
    // Apply theme
    applyTheme(newTheme);
    
    // Remove transition class after one frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        html.classList.remove('theme-transitioning');
      });
    });
  } else {
    applyTheme(newTheme);
  }
  
  return newTheme;
}

// Get current theme from DOM (no state needed)
export function getCurrentTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return document.documentElement.classList.contains('light') ? 'light' : 'dark';
}
