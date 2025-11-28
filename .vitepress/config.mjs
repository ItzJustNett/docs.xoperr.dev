// docs/.vitepress/config.mjs  ← note the .mjs
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Xoperr Dev',
  description: 'Documentation for my Minecraft plugins & mods',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.png' }]
  ],

  ignoreDeadLinks: true,

  themeConfig: {
    logo: '/favicon.png',

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
