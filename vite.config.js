import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/Biswas-English-Academy",
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "/", // ✅ root base for Vercel
//   build: {
//     outDir: "dist", // ✅ tells Vercel where to find the final build
//   },
// });
