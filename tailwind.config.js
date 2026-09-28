/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["vivoSansSC", "Inter", "Arial", "sans-serif"] },
      colors: {
        jovi: {
          background: "var(--bg-color)",
          card: "var(--bg-card)",
          elevated: "var(--bg-elevated)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          highlight: "var(--text-highlight)",
          border: "var(--card-border)",
        },
      },
      boxShadow: { jovi: "var(--shadow-card)" },
    },
  },
  plugins: [],
};
