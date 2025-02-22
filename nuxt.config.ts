// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: { preset: 'static' },
  site: { enabled: true, indexable: true },
  css: ['~/assets/stylesheets/main.css', '~/assets/stylesheets/fonts.css'],
  app: {
    head: {
      title: 'Ali Salmanian | QuantumCipher | Official Website',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ charset: 'utf-8' }], 
      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css' }, {rel: 'icon', href: '/favicon.ico'}],
    },
  },
  robots: {
    allow: ['/'],
    disallow: ['/o/*'],
  },
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
})