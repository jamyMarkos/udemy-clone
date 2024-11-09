// nuxt.config.ts
export default {
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
}
