/**
 * Inline script to prevent flash of wrong theme
 * Runs before React hydration - zero flicker
 */

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              if (!theme) {
                theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
              }
              if (theme === 'light') {
                document.documentElement.classList.add('light');
              }
            } catch (e) {}
          })();
        `,
      }}
    />
  );
}
