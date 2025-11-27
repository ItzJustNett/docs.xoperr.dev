// docs/.vitepress/theme/index.js
export default {
  enhanceApp({ app, router, siteData }) {
    // nothing here yet
  },

  // ← THIS IS THE IMPORTANT PART
  transformHtml: (_, id, { pageData }) => {
    if (!/index\.html$/.test(id)) return

    return {
      head: [
        // Google site verification tag
        ['meta', { name: 'google-site-verification', content: 'vCCRLHnUpgkc-JQDSlr1bUYWm3dXRf1MMlep5ZiDjPE' }]
      ]
    }
  }
}
