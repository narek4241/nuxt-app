export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)

  head: {
    title: "WD App",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
      }
    ]
  },

  loading: { color: "#fa923f", height: "4px", duration: 5000 },

  // #note works in mode of 'spa' not 'universal'
  // loadingIndicator: {
  //   name: "circle",
  //   color: "#fa923f"
  // },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // dev: boolean //rm

  env: {
    baseUrl: process.env.BASE_URL || "https://mynuxt-app.firebaseio.com"
  },

  router: {
    // linkActiveClass: "active"
    // OPT
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: "*",
    //     component: resolve(__dirname, "pages/index.vue")
    //   });
    // }
  },

  srcDir: "src/",

  transition: {
    name: "fade",
    mode: "out-in"
  }
};
