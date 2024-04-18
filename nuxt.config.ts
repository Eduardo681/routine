export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "@vee-validate/nuxt"],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  srcDir: "src",
  runtimeConfig: {
    public: {
      API_ENDPOINT: process.env.API_ENDPOINT,
    },
  },
  css: [
    "assets/scss/styles.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Util routine",
      meta: [{ name: "description", content: "App for routine management." }],
    },

    pageTransition: { name: "page", mode: "out-in" },
  },
  plugins: ["~/plugins/validator.ts"],
});
