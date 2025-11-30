// Theme initialization script - prevents FOUC
export const themeScript = `
(function() {
  const theme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark = theme === 'dark' || (!theme && prefersDark);
  
  if (shouldBeDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
})();
`


