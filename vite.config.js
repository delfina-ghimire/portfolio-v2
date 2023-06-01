import { defineConfig } from 'vite'
// import image from "vite-plugin-image";
//import react from "@vitejs/plugin-react-swc";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
  },
});
