import { resolve } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mena | blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  alias: {
    images: resolve(__dirname, './static/images'),
    style: resolve(__dirname, './static/scss'),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/node_modules/bootstrap/dist/css/bootstrap.css', lang: 'css' },
    { src: '~/static/scss/app.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos.client', ssr: false },
    { src: '~/plugins/nuxtjs-sticky-sidebar', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/primary-comps', extensions: ['vue'] },
    { path: '~/components/secondary-comps', extensions: ['vue'] },
    { path: '~/components/tertiary-comps', extensions: ['vue'] },
    { path: '~/components/sidebar-comps', extensions: ['vue'] },
    { path: '~/components/modal-comps', extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    source: '~/static/icon.png',
    icon: {
      fileName: 'icon.png?v1',
    },
  },

  styleResources: {
    scss: [
      '~/static/scss/_variables.scss',
      '~/static/scss/_mixins.scss',
      '~/static/scss/_breakpoints.scss',
      '~/static/scss/_colors.scss',
      '~/static/scss/_utilities.scss',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    routes: [
      {
        name: 'post',
        path: '/post/:postSlug?',
        component: '~/pages/post/_postSlug.vue',
      },
    ],
  },
}
