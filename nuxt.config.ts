// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  pages: true,
  imports: {
    autoImport: true,
    collectMeta: true,
  },
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "nuxt-mongoose",
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
    },
    dbUrl: process.env.DATABASE_URL,
  },
  mongoose: {
    uri: process.env.DATABASE_URL,
    options: {},
    modelsDir: "models",
  },
  app: {
    head: {
      script: [{ src: "https://js.stripe.com/v3/", defer: true }],
    },
  },
});
