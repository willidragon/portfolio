/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      maxWidth: {
        custom: "1300px", // Custom max width
      },
      borderRadius: {
        custom: "12px", // Custom border radius
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Cascadia Mono",
          "Segoe UI Mono",
          "Roboto Mono",
          "Oxygen Mono",
          "Ubuntu Monospace",
          "Source Code Pro",
          "Fira Mono",
          "Droid Sans Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
};
