// Minimal Tailwind config to satisfy tooling that requires a config file.
// Tailwind v4 primarily uses CSS-first tokens via @theme, so this can stay lean.
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {},
  plugins: [],
};

export default config;


