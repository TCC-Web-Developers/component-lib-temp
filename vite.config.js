import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// import Components from "unplugin-vue-components/vite";
// import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL("./node_modules", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    // AutoImport({
    //   imports: ["vue", "vue-router"],
    //   dts: false,
    // }),
    // Components({
    //   dirs: ["src/components"],
    //   // valid file extensions for components.
    //   extensions: ["vue"],
    //   // search for subdirectories
    //   deep: true,
    //   // filters for transforming targets
    //   include: [/\.vue$/, /\.vue\?vue/],
    //   exclude: [
    //     /[\\/]node_modules[\\/]/,
    //     /[\\/]\.git[\\/]/,
    //     /[\\/]\.nuxt[\\/]/,
    //   ],
    //   dts: false,
    // }),
  ],
});
