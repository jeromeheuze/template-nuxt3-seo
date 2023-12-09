// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/style.scss'],
  modules: ['nuxt-gtag', '@nuxtjs/google-fonts', 'nuxt-icon-tw', '@nuxtjs/tailwindcss'],
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
  tailwindcss: {
    // Options
  },
  devtools: { enabled: false }
})
