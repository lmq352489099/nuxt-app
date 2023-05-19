export default defineNuxtPlugin((nuxt) => {

  nuxt.hook('vue:error', () => {
    console.log('vue:error2')
  })
  nuxt.hook('app:error', () => {
    console.log('app:error2')
  })
  nuxt.vueApp.config.errorHandler = () => {
    // 上报错误日志
    console.log('触发错误日志')
  }

})
