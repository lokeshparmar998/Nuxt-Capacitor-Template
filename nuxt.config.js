const env = () => {
  if (process.env.NODE_ENV == "production") {
    return "https://backend.mumbai.avrioconnect.com";
  } else if (process.env.NODE_ENV == "development") {
    return "https://devbackend.mumbai.avrioconnect.com";
  } else if (process.env.NODE_ENV == "local") {
    return "http://localhost:8000";
  }
};
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  env: {
    BaseUrl: env(),
  },
  ssr: false,
  loading: '@/components/LoadingBar.vue',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "wifi-provisioning",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/utility.js','~/plugins/toast.js'],


  middleware: ['auth'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    "nuxt-buefy",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxtjs/toast',
    'nuxt-vuex-localstorage',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    /* baseURL: "/", */
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
