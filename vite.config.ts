import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@views", replacement: "/src/views" },
      { find: "@components", replacement: "/src/components" },
      { find: "@store", replacement: "/src/store" },
    ],
  },
  plugins: [vue()],
});
