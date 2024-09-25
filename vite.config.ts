import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: "IT_",
  server: {
    port: 8008,
    open: true,
  },
  preview: {
    port: 8009,
    open: true,
  },
  //REM: Do we need to add plugin for this to reduce redundancy? See @ `./tsconfig.app.json`
  resolve: {
    alias: {
      "@innovative_troublemaker/campus_information_system":
        path.resolve(
          __dirname, 
          "./src/main/innovative_troublemaker/campus_information_system"
        ),
      // "@main": path.resolve(__dirname, "./src/main"),
      "@misc":
        path.resolve(
          __dirname,
          "./src/.misc"
        ),
    },
  },
  build: {
    outDir: "build",
    assetsDir: "innovative_troublemaker/campus_information_system",
  }
})
