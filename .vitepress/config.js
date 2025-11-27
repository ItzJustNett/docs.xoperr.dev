import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Xoperr Dev',
  description: 'Documentation for my Minecraft plugins & mods',

  // This stops the dead-link errors while you’re still creating pages
  ignoreDeadLinks: true,

  themeConfig: {
    // Top navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Plugins', link: '/plugins/' },
      { text: 'Tutorials', link: '/tutorials/' }
    ],

    // Social links – this was the syntax error before
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' },   // ← change to your real GitHub
      { icon: 'discord', link: 'https://discord.gg/CUQdkPzGKb' }
    ],

    // Little arrow on external links (Modrinth, etc.)
    externalLinkIcon: true,

    footer: {
      message: 'Made with VitePress',
      copyright: '© 2025 Xoperr'
    }
  }
})
