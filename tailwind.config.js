/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        // '40px': '40px',
        'xxs' : '0.5rem'
      },
      colors:{
        'light-gray' : '#FEFCFB',
        'custom-black': '#2A2A2A'
      },
      width: {
        '68': '17rem',
      },
      boxShadow: {
        'custom': '0 -8px 25px 0 rgba(159, 162, 180, 0.1)',
      },


    },
  },
  plugins: [],
};
