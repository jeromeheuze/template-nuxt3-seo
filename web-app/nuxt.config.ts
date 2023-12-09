// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      meta: [
        {name:"google-site-verification", content:"xxxxxxx"}
      ],
      link: [
        {rel: 'shortcut icon',type:'image/x-icon', href: '/favicon.svg'}
      ],
      script: [ // valid options are: 'head' | 'bodyClose' | 'bodyOpen'

      ]
    }
  },
  css: ['~/assets/scss/style.scss'],
  modules: ['nuxt-gtag', '@nuxtjs/google-fonts', 'nuxt-icon-tw', '@nuxtjs/tailwindcss', 'nuxt-simple-sitemap', 'nuxt-simple-robots'],
  gtag: {
    id: 'G-XXXXXXXXXX'
  },
  googleFonts: {
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    families: {
      Roboto: true,
      Lato: [100, 300],
      Raleway: '200..700',
      Inter: '200..700',
    }
  },
  sitemap: {
    xslTips: false,
    strictNuxtContentPaths: true
  },
  content: {
    documentDriven: true
  },
  site: {
    url: 'https://website-goes-here.com',
  },
  tailwindcss: {
    // Options
  },
  devtools: { enabled: false }
})
