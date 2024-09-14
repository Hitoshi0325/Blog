import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sachertorte",
  description: "Hitocode_log",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "Portfolio",
        items: [
          {
            text: "Going to portfolio site",
            link: "https://sachertorte.main.jp/portfolio-site/src/index.html",
          },
        ],
      },
    ],

    sidebar: [
      {
        // text: "Examples",
        items: [
          { text: "About me", link: "/posts/about" },
          { text: "Blogs", link: "/posts/postList.md" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Hitoshi0325?tab=repositories",
      },
    ],
  },
});
