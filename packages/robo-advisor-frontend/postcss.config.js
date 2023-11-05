import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import tailwindConfig from "./tailwind.config.js/index.js";

const config = {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};

export default config;
