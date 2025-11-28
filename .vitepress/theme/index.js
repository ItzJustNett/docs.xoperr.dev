// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import PluginFeatures from './components/PluginFeatures.vue'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    // Register custom components globally
    app.component('PluginFeatures', PluginFeatures)
  },

  // This injects the Google verification tag into every page
  transformHead(context) {
    return [
      ['meta', { name: 'google-site-verification', content: 'vCCRLHnUpgkc-JQDSlr1bUYWm3dXRf1MMlep5ZiDjPE' }]
    ]
  }
}
