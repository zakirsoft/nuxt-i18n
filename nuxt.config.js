import I18N from "./config/i18n";
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans:400",
      },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        integrity:
          "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
        crossorigin: "anonymous",
      },

      {
        src:
          "https://ig.instant-tokens.com/users/06b403fb-3648-40d7-9636-c5092491a922/instagram/17841405806191132/token.js?userSecret=hjk7wqp47noc5y2u8zmf6b",
        body: true,
      },
      // {
      //   src: "GSDevTools.min.js",
      // },

      // { src: '/assets/owl/owl.carousel.min.js'}
    ],
  },

  /*
   ** Global CSS
   */
  css: [
    "@/assets/scss/main.scss",
    // '@/assets/owl/assets/owl.carousel.min.css',
    // '@/assets/owl/assets/owl.theme.default.min.css',
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css",
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "plugins/owl.js", mode: "client" },
    { src: "~/plugins/version" },
    {
      src: "./plugins/GoogleAnalytics.js",
      mode: "client",
    },

    // {
    //   src: "~plugins/carousel-3d.js",
    //   mode: "client",
    //   ssr: false,
    // },
    {
      src: "~plugins/vue-scrollmagic.js",
      mode: "client",
    },
    // {
    //   src: "~plugins/vue-fullscroll.js", mode: 'client'
    // },
    {
      src: "@/plugins/vuetimeline.js",
      mode: "client",
    },
    {
      src: "~/plugins/slick-carousel.js",
      mode: "client",
    },
    {
      src: "~/plugins/photoswipe.js",
      mode: "client",
      ssr: false,
    },
    "~/plugins/loadingEnable.js",
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["nuxt-gsap-module", "@nuxtjs/tailwindcss"],

  gsap: {
    extraPlugins: {
      /**
       * After activation, plugins are automatically
       * registered and available globally
       */
      text: false,

      scrollTo: true,
      // scrollTrigger: true,
    },
    // clubPlugins: {
    //   gsDevTools: true,
    // },
    extraEases: {
      expoScaleEase: true,
      back: true,
      Elastic: true,
      Expo: true,
    },
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // [
    //   "@nuxtjs/firebase",
    //   {
    //     config: {
    //       apiKey: "AIzaSyBHMFNr1T6hXJhcGNHn7DepV5OVrWW1ris",
    //       authDomain: "madauth-7122a.firebaseapp.com",
    //       projectId: "madauth-7122a",
    //       storageBucket: "madauth-7122a.appspot.com",
    //       messagingSenderId: "922611478325",
    //       appId: "1:922611478325:web:4c5173278adb96e653267c",
    //       measurementId: "G-E031S9W3DP",
    //     },
    //     services: {
    //       auth: true, // Just as example. Can be any other service.
    //     },
    //   },
    // ],
    ["@nuxtjs/axios"],
    // Doc: https://bootstrap-vue.js.org
    ["bootstrap-vue/nuxt", { css: false }],

    ["@nuxt/content"],
    // <!-- TODO[epic=Lang] -->
    // [
    //   "nuxt-i18n",
    //   {
    //     locales: [
    //       {
    //         name: "English",
    //         code: "en",
    //         iso: "en-US",
    //         file: "en.js",
    //       },
    //       {
    //         name: "Français",
    //         code: "fr",
    //         iso: "fr-FR",
    //         file: "fr.js",
    //       },
    //     ],
    //     langDir: "lang/",
    //     defaultLocale: "en",
    //     seo: false,
    //     vueI18nLoader: true,
    //     //   defaultLocale: "en",
    //   },
    // ],

    // "nuxt-gsap",
    // [("nuxt-i18n", I18N)],

    // {
    //   lazy: true,
    //   langDir: 'locales/',
    //   vueI18nLoader: true,
    //   defaultLocale: "en",
    //   seo: true,
    //   strategy: 'prefix',
    //   detectBrowserLanguage: {
    //     alwaysRedirect: true,
    //     useCookie: true,
    //     cookieKey: "i18n_redirected",
    //     onlyOnRoot: true, // recommended
    //   },
    //   locales: [
    //     {
    //       file: "de.json",
    //       code: "de",
    //       name: "Deutsch",
    //       iso: 'DE',

    //     },
    //     {
    //       file: "es.json",
    //       code: "es",
    //       name: "Spanish",
    //       iso: 'es'

    //     },
    //     {
    //       file: "ru.json",
    //       code: "ru",
    //       name: "Russian",
    //       iso: 'ru'
    //     },

    //     {
    //       file: "fr.json",
    //       code: "fr",
    //       iso: "fr-FR",
    //       name: "Français",
    //     },
    //     {
    //       file: "en.json",
    //       code: "en",
    //       iso: "en-US",
    //       name: "English",
    //     },
    //   ],
    //   vueI18n: i18n,
    // },

    // "@nuxtjs/sitemap",
  ],
  content: {
    prism: {
      theme: "prism-themes/themes/prism-material-oceanic.css",
    },
    nestedProperties: ["author.name"],
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ["gsap"],
  },
  // loading: "~/components/Loading.vue",
  generate: {
    fallback: true,
  },
};
