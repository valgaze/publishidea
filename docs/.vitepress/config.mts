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
      { text: "🆕 Start Here", link: "/new" },
      {
        text: "🚀 Examples",
        items: [
          {
            text: "🎨 Common Patterns",
            link: "/patterns",
          },
          {
            text: "🐣 Run a bot locally",
            link: "/new",
          },
          {
            text: "λ Deploy to AWS Lamda",
            link: "/examples/lambda/README",
          },
          {
            text: "🔥 Deploy to Worker ",
            link: "/examples/worker/README",
          },
          {
            text: "🦖 Deploy to Deno",
            link: "/examples/deno/README",
          },
          {
            text: "🌐 Deploy to Server ",
            link: "/examples/standard-server/README",
          },
          {
            text: "📲 LLM streaming responses",
            link: "/examples/llm-stream/README",
          },
          {
            text: "🔐 Secure Webhooks ",
            link: "/webhooks",
          },
        ],
      },
      { text: "📇 SpeedyCard", link: "/speedycard" },
      { text: "🔧 Garage", link: "/garage" },
      { text: "📚 Reference", link: "/../api-docs/modules" },
      { text: "🐍 Python Version", link: "https://pypi.org/project/speedybot" },
      // { text: "🏡 Home", link: "/" },

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
