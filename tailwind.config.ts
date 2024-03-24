import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '700px',
      // => @media (min-width: 640px) { ... }

      'md': '1100px',
      // => @media (min-width: 768px) { ... }

      'lg': '1600px',
      // => @media (min-width: 1024px) { ... }

      'xl': '2080px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '3000px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-bg": "url('/background-1.gif')"
      },
      maxWidth: {
        "default": "90%"
      },
      width: {
        "default": "1300px"
      },
      margin: {
        "default": "0 auto"
      },
      colors: {
        "primary": "#8FC4D9",
        "secondary": "#7ABF9F",
        "gray-1": "#090e10",
        "gray-2": "#1c2125"
      }
    },
  },
  plugins: [],
};
export default config;
