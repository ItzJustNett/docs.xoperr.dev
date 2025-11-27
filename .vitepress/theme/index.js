// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,

  // This injects the Google verification tag into every page
  transformHead(context) {
    return [
      ['meta', { name: 'google-site-verification', content: 'vCCRLHnUpgkc-JQDSlr1bUYWm3dXRf1MMlep5ZiDjPE' }]
    ]
  }
}
