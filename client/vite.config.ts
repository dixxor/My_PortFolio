import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/My_PortFolio/", // This must match your GitHub repo name exactly!
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // No custom build.outDir: output will go to client/dist by default
});
