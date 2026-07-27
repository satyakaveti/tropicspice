/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#125920',   // brand green (text, titles, cards active highlights)
        accent: '#125920',    // brand green (buttons, back-to-top, hover states)
        dark: '#2B1B0F',      // deep brown-black — header / footer / testimonial card bg
        darker: '#1C110A',    // copyright bar
        cream: '#FFFFFF',     // white background
        offwhite: '#FFFFFF',  // white background
        testibg: '#FFFFFF',   // white background
        brown: '#D21F1B',     // mirchi red — uppercase kicker labels
        muted: '#4B5563',     // neutral grey body paragraph text
        footertext: '#C9C2B8',
        copytext: '#8A8177',
      },
      fontFamily: {
        script: ['Montez', 'cursive'],
        serif: ['Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        container: '1250px',
      },
    },
  },
  plugins: [],
};
