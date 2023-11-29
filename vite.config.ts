import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cwd } from "process";

let baseUrl = "/";

if (process.env.NODE_ENV === "production") {
  baseUrl = cwd().split("/").pop() || "/";
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseUrl,
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
});
