export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/styles.css'],
  modules: [],
  vite: {
    server: {
      allowedHosts: ['8hrs.xyz', 'www.8hrs.xyz', 'localhost']
    }
  }
})
