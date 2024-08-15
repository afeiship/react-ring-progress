import jswPresets from '@jswork/presets-tailwind';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [jswPresets()],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss', daisyui],
  daisyui: {
    themes: ['emerald']
  },
};
