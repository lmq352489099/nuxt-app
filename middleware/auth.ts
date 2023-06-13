// 判断用户是否登录

// const store = useUser()
// if (!store.isLogin) {
//   console.log('具名中间件,影响指定页面:', to, from)
//   return navigateTo(`/login?callback=${to.path}`)
// }
const message = useMessage()

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
  const route = useRoute()

  // 未登录重定向到登录页
  if (!token.value) {
    if (process.client)
      message.error('请先登录')

    return navigateTo(`/login?from=${route.fullPath}`)
  }
})
