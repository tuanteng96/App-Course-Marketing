import path from "path";
import react from "@vitejs/plugin-react";
// import { visualizer } from "rollup-plugin-visualizer";

const SRC_DIR = path.resolve(__dirname, "./src");
const PUBLIC_DIR = path.resolve(__dirname, "./public");
const BUILD_DIR = path.resolve(__dirname, "./www");
export default async () => {
  return {
    plugins: [
      react(),
      // visualizer({
      //   template: "treemap", // or sunburst
      //   open: true,
      //   gzipSize: true,
      //   brotliSize: true,
      //   filename: "analyse.html", // will be saved in project's root
      // }),
    ],
    root: SRC_DIR,
    base: "",
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false,
        output: {
          assetFileNames: (assetInfo) => {
            if (/\.css$/.test(assetInfo.name)) {
              return "assets/css/[name][extname]";
            }
            return `assets/[name][extname]`;
          },
          chunkFileNames: "assets/js/[name].js",
          entryFileNames: "assets/js/[name].js",
        },
      },
    },
    resolve: {
      alias: {
        "@": SRC_DIR,
      },
    },
    server: {
      host: true,
    },
  };
};
