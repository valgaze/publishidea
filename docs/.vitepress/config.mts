import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SpeedyBot",
  description: "Rich conversation agents, the speedy and easy way",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    build: {
      rollupOptions: {
        external: ["element-plus", "adaptivecards"],
      },
    },
    ssr: {
      noExternal: ["monaco-editor"],
    },
    optimizeDeps: {
      include: ["adaptivecards"],
    },
  },
});
