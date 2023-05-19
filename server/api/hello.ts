export default defineEventHandler((event) => {
  console.log('hello 接口被调用了1')
  return {
    message: 'hello,nuxt3!',
  }
})
