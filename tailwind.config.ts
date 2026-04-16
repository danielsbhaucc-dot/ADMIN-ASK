import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-heebo)', 'Heebo', 'Segoe UI', 'sans-serif'],
      },
    },
  },
} satisfies Config
