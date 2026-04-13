import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import devtoolsJson from "vite-plugin-devtools-json";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [sveltekit(), tailwindcss(), devtoolsJson()],
  test: {
    include: ["tests/**/*.{test,spec}.{js,ts}"],
    environment: "jsdom",
  },
});
