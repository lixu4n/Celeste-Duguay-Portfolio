import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gptcolor: "#212121", 
        sidegpt:"#171717",
        chatbox:"#303030",
        fonctcolor1:"#ECECEC",
        fontcolor2:"#B4B4B4",
        buttoncolor:"#676767",
 
      },
      screens: {
        'sm':{'max': '630px'}, 

      },
    },
  },
  plugins: [],
};

export default config;
