import type { Config } from "tailwindcss";
import { colors, nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  defaultTheme: "light",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: '#FFFFFF',
          foreground: '#000000',
          secondary: {
            DEFAULT: '#FF52BA'
          }
        }
      },
      dark: {
        colors: {
          background: '#000000',
          foreground: '#FFFFFF',
          secondary: {
            DEFAULT: '#FF52BA'
          }
        }
      }
    }
  })],
};
export default config;
