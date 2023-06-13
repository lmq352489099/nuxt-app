export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    console.log(`全局中间件c,影响指定页面:${to.path}`, from)
    // throw new Error('中间件a抛出错误')
  }

})
