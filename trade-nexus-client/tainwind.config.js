import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2a9d8f",
          secondary: "#f4a261",
          accent: "#e9c46a",
          neutral: "#264653",
          "base-100": "#ffffff",
          "base-content": "#1f2937",
        },
        dark: {
          primary: "#2a9d8f",
          secondary: "#f4a261",
          accent: "#e9c46a",
          neutral: "#264653",
          "base-100": "#121212",
          "base-content": "#ffffff",
        },
      },
    ],
  },
};
