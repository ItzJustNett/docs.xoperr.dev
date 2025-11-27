// docs/.vitepress/config.mjs  ← note the .mjs
import { defineConfig } from 'vitepress'

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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ItzJustNett' },  // update this
      { icon: 'discord', link: 'https://discord.gg/CUQdkPzGKb' }
    ],

    externalLinkIcon: true,

    footer: {
      message: 'Made with love and care',
      copyright: '© 2025 Xoperr'
    }
  }
})
