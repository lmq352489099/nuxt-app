import type { H3Event } from 'h3'

export default defineEventHandler((event) => {
  // console.log('服务端auth中间件', event.path)
  // 请求不被允许时返回响应错误
  const isAllowed = protectAuthRoute(event)
  if (!isAllowed)
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }))
})

function protectAuthRoute(event: H3Event) {
  const protectedRoutes = ['/api/detail']
  // path 不以 protectedRoutes 中任何项为起始则允许请求
  if (!event?.path || !protectedRoutes.some(route => event.path?.startsWith(route)))
    return true

  return authCheck(event)
}

// 检查是否已认证
function authCheck(event: H3Event) {
  console.log('1111', event)
  const token = getHeader(event, 'token')
  if (!token)
    return false

  return true
}
