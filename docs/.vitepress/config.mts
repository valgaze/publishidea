import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/publishidea/", // repo name
  title: "SpeedyBot",
  description: "Rich conversation agents, the speedy and easy way",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "🏡 Home", link: "/" },
      { text: "📇 SpeedyCard Editor", link: "/speedycard" },
      { text: "🆕 Start Here", link: "/new" },
      { text: "🔧 Garage", link: "/garage" },
      { text: "🌟 Examples", link: "/examples/README" },
      { text: "📚 API Docs", link: "/../api-docs/modules" },
      { text: "🐍 Python Version", link: "https://pypi.org/project/speedybot" },

      // { text: "Examples", link: "/markdown-examples" },
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
    // build: {
    //   rollupOptions: {
    //     external: ["adaptivecards"],
    //   },
    // },
    ssr: {
      noExternal: ["monaco-editor"],
    },
    optimizeDeps: {
      include: ["adaptivecards", "element-plus"],
    },
  },
});
