import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#231F20',
        'secondary': '#BB4430',
        'ternary': '#7EBDC2',
        'cuaternary': '#F3DFA2',
        'quinary': '#EFE6DD',
        'light': '#EFE6DD',
        'skeleton': '#ccc',
      },
    },
  },
  plugins: [

  ],
}

export default config

