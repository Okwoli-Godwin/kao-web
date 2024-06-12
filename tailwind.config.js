/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
				// sm: { min: "300px", max: "767px" },
				// // => @media (min-width: 640px and max-width: 767px) { ... }
				// md: { min: "768px", max: "1023px" },
				// // => @media (min-width: 768px and max-width: 1023px) { ... }
				// lg: { min: "1024px", max: "1279px" },
				// // => @media (min-width: 1024px and max-width: 1279px) { ... }
				// xl: { min: "1280px", max: "1535px" },
				// // => @media (min-width: 1280px and max-width: 1535px) { ... }
				// "2xl": { min: "1536px" },
				// // => @media (min-width: 1536px) { ... }
        // xxl: { min: "1536px", max: "2560px" },
        xsm: { min: "300px", max: "375px" },
        sm: { min: "376px", max: "500px" },
        md: { min: "501px", max: "768px" },
        lg: { min: "769px", max: "1024px" },
        xl: {min: "1025px", max: "1440px"}
      },
       keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}

