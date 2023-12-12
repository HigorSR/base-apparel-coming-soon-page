import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "Desaturated-Red": "hsl(0, 36%, 70%)",
        "Soft-Red": "hsl(0, 93%, 68%)",

        "Dark-Grayish-Red": "hsl(0, 6%, 24%)",
        "from-button": "hsl(0, 80%, 86%)",
        "to-button": "hsl(0, 74%, 74%)"
      }
    },
  },
  plugins: [],
}
export default config
