/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "10px 10px 5px rgba(0, 0, 0, 0.25)",
      },
    },
    plugins: [require("daisyui")],
  },
};
