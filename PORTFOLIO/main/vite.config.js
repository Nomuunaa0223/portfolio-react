import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
  optimizeDeps: {
    exclude: [
      "react-native-web",
      "react-native-web/dist/apis/StyleSheet/registry",
    ],
  },
});
