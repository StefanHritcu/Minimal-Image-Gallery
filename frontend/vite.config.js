import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("nature")) {
            return "nature";
          }
          if (id.includes("cities")) {
            return "cities";
          }
          if (id.includes("animals")) {
            return "animals";
          }
          if (id.includes("technology")) {
            return "technology";
          }
        },
      },
    },
  },
});
