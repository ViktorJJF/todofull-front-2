import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "@vuetify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3030,
  },
  build: {
    outDir: "./dist",
    emptyOutDir: false,
  },
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: { charset: false },
      css: { charset: false },
    },
  },
});
