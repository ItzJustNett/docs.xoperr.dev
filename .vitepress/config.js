import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Xoperr Dev',
  description: 'Documentation for my Minecraft plugins & mods',

  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Plugins', link: '/plugins/' },
      { text: 'Tutorials', link: '/tutorials/' }
    ],

    // Optional: nice little arrow on external links (Modrinth, etc.)
    externalLinkIcon: true,

    // Social links in the header/footer
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ItzJustNett' }
      { icon: 'discord', link: 'https://discord.gg/CUQdkPzGKb' }
    ],

    footer: {
      message: 'Made with love and care',
      copyright: '© 2025 Xoperr'
    }
  }
})
