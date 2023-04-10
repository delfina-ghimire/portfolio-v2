import { defineConfig } from 'vite'
import image from "vite-plugin-image";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    image({
      include: ["**/*.jpg"], // Handle .jpg files
    }),
  ],
});
