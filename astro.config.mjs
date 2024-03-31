import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    sitemap(),
    icon(),
    expressiveCode({
      themes: ["catppuccin-latte", "tokyo-night"],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => `.${theme.type}`,
      styleOverrides: {
        borderRadius: 0,
      },
    }),
  ],
});
