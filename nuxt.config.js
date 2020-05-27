import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'わくわくフェスティバル2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: '名古屋で行われる地域限定わくわくフェスティバル2020では子供から大人まで愛犬と一緒に楽しめるイベントです！わんちゃんたちと最高の思い出を作りましょう！皆様のご参加お待ちしております。' },
      { property: 'og:site_name', content: 'わくわくフェスティバル2020' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'わくわくフェスティバル2020' },
      { property: 'og:description', content: '名古屋で行われる地域限定わくわくフェスティバル2020では子供から大人まで愛犬と一緒に楽しめるイベントです！わんちゃんたちと最高の思い出を作りましょう！皆様のご参加お待ちしております。' },
      { property: 'og:url', content: 'https://wakuwakufes.com/' },
      { property: 'og:image', content: 'https://wakuwakufes.com/img/fv.52bed8ce.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/wakuwakufestival/favicon.ico' },
      { rel: "stylesheet", href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c"},
    ]
  },
  /*
   ** Customize router
   */
  router: {
    base: '/wakuwakufestival/',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
