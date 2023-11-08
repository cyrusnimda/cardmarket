import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
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

