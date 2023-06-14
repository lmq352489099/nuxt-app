// https://nuxt.com/docs/api/configuration/nuxt-config

console.log('基础服务路径', process.env.JSON_SECRET)
const myConfig = {
  runtimeConfig: {
    // 只能用于服务端key,.env 有写则覆盖
    apiSecret: 'mysecret',
    DATABASE_URL: process.env.DATABASE_URL,
    apiSecret2: 'mysecret2',
    // 只能用于前端
    public: {
      apiBase: '/api',
    },
  },
}

const imports = {
  imports: {
    dirs: [
      // 扫描顶层目录中模块
      'composables',
      // 扫描内嵌一层深度的模块，指定特定文件名和后缀名
      'composables/*/index.{ts,js,mjs,mts}',
      // 扫描给定目录中所有模块
      'composables/**',
      'store',
    ],
  },
}

const headApp = {
  app: {
    head: {
      charset: 'utf-8', // 快捷方式
      viewport: 'width=device-width, initial-scale=1', // 快捷方式
      title: '流年的技术空间',
      meta: [
        { name: 'description', content: 'java,js,ts,html,dokcer' },
        { name: 'charset', content: 'utf-8' },
      ],
      link: [],
      style: [],
      script: [],
    },
  },
}

export default defineNuxtConfig({
  // ssr: false, //spa
  // vite: {},
  // nitro: {
  //   preset: 'vercel',
  // },
  // builder:"webpack",//需要安装依赖 @nuxt/webpack-builder
  // webpack: {},
  // postcss: {},
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    // '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs',
        ],
      },
    ],
  ],
  ...myConfig,
  ...imports,
  ...headApp,

  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',

  },
  // devtools: {
  //   enabled: true,
  // }


  // css: [
  //   // 'assets/global.css'
  // ],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "~/assets/_variables.scss";',
  //       },
  //     },
  //   },
  // },
})

