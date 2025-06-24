import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs of EthanRefrain",
  description: "A Development Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Development', link: '/development' }
    ],

    sidebar: [
      {
        text: 'Development',
        items: [
          { text: 'Obsidian插件开发', link: '/Obsidian/ObsidianPlugin' },
          { text: 'VitePress教程', link: '/VitePress/Vitepress' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LXiangEthan/wikinotes' }
    ]
  }
})
