import fs from "node:fs/promises";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const spa404Fallback = () => ({
  name: "spa-404-fallback",
  apply: "build" as const,
  async closeBundle() {
    const distDir = path.resolve(__dirname, "dist");
    await fs.copyFile(
      path.resolve(distDir, "index.html"),
      path.resolve(distDir, "404.html"),
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  build: {
    assetsDir: 'assets',
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), spa404Fallback(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
