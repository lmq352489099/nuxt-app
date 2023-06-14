export default defineEventHandler((event) => {
  console.log('进入中间件222',process.env.JSON_SECRET)
  // 扩展上下文对象
  // event.context.userInfo = { user: 'cunzhang' }
  // // 审查请求信息
  // const id = parseInt(event.context!.params!.id) as number
  // if (!Number.isInteger(id)) {
  //   // 抛出错误
  //   return sendError(
  //     event,
  //     createError({
  //       statusCode: 400,
  //       statusMessage: 'ID should be an integer',
  //     })
  //   )
  // }
})
