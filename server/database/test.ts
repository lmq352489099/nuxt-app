import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()




async function main() {


  // await prisma.user.create({
  //   data: {
  //     name: '村长',
  //     email: 'yt03792@qq.com',
  //     posts: {
  //       create: {
  //         title: '10分钟速通下一代ORM解决方案：Prisma',
  //       },
  //     },
  //   },
  // })


  // const post = await prisma.post.update({
  //   where: { id: 1 },
  //   data: { published: true },
  // })
  // 查询所有用户
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true
  //   }
  // })



  // const allUsers = await prisma.column.updateMany({
  //   where: { cover: 'column-nuxt.png' },
  //   data: { cover: 'https://cn-minio.us168168.com/fat/images/us168/fdb812d5e47b42aab3409c58dbaa09a91662028546970746880.jpeg' }
  // })

  // 批量添加
  // const allUsers = await prisma.column.createMany({
  //   data: [{
  //     title: '上层框架最佳选择: Nuxt',
  //     cover: 'https://cn-minio.us168168.com/fat/images/us168/fdb812d5e47b42aab3409c58dbaa09a91662028546970746880.jpeg',
  //     desc: '上层框架最佳选择：Nuxt',
  //     content: `开箱即用的开发环境...`,
  //   }, {
  //     title: '上层框架最佳选择: Nuxt',
  //     cover: 'https://cn-minio.us168168.com/fat/images/us168/fdb812d5e47b42aab3409c58dbaa09a91662028546970746880.jpeg',
  //     desc: '上层框架最佳选择：Nuxt',
  //     content: `开箱即用的开发环境...`,
  //   }, {
  //     title: '上层框架最佳选择: Nuxt',
  //     cover: 'https://cn-minio.us168168.com/fat/images/us168/fdb812d5e47b42aab3409c58dbaa09a91662028546970746880.jpeg',
  //     desc: '上层框架最佳选择：Nuxt',
  //     content: `开箱即用的开发环境...`,
  //   }, {
  //     title: '上层框架最佳选择: Nuxt',
  //     cover: 'https://cn-minio.us168168.com/fat/images/us168/fdb812d5e47b42aab3409c58dbaa09a91662028546970746880.jpeg',
  //     desc: '上层框架最佳选择：Nuxt',
  //     content: `开箱即用的开发环境...`,
  //   }, {
  //     title: '上层框架最佳选择: Nuxt',
  //     cover: 'https://cn-minio.us168168.com/fat/images/us168/fdb812d5e47b42aab3409c58dbaa09a91662028546970746880.jpeg',
  //     desc: '上层框架最佳选择：Nuxt',
  //     content: `开箱即用的开发环境...`,
  //   }, {
  //     title: '上层框架最佳选择: Nuxt',
  //     cover: 'https://cn-minio.us168168.com/fat/images/us168/fdb812d5e47b42aab3409c58dbaa09a91662028546970746880.jpeg',
  //     desc: '上层框架最佳选择：Nuxt',
  //     content: `开箱即用的开发环境...`,
  //   }, {
  //     title: '上层框架最佳选择: Nuxt',
  //     cover: 'https://cn-minio.us168168.com/fat/images/us168/fdb812d5e47b42aab3409c58dbaa09a91662028546970746880.jpeg',
  //     desc: '上层框架最佳选择：Nuxt',
  //     content: `开箱即用的开发环境...`,
  //   },]
  // })


  // 查询课程
  // const allUsers = await prisma.course.findMany({

  // })
  // 查询课程,已倒序排列
  // const allUsers = await prisma.course.findMany({
  //   orderBy: { id: 'desc' },
  //   skip: 1* 2,
  //   take: 2,
  // })







  // 创建几个课程  和 对应的章节
  // const courses = await prisma.course.createMany({
  //   data: [
  //     {
  //       title: 'Nuxt全栈开发1111111',
  //       cover: 'course-nuxt.png',
  //       desc: '这门课我会全面讲解。。。',
  //       oPrice: 129,
  //       price: 99,
  //       detail: `这门课程共分五个模块：。。。`,
  //     },
  //     {
  //       title: 'Nuxt全栈开发222222',
  //       cover: 'course-nuxt.png',
  //       desc: '这门课我会全面讲解。。。',
  //       oPrice: 129,
  //       price: 99,
  //       detail: `这门课程共分五个模块：。。。`,
  //     },
  //   ],
  // })
  // console.log(courses)

  // const createdUsers = await prisma.course.findMany({
  //   where: {
  //     title: { in: ["Nuxt全栈开发222222", "Nuxt全栈开发1111111"] },
  //   },
  // })


  // // 将每个课程与多个章节建立关系
  // for (const course of createdUsers) {
  //   await prisma.catalogue.createMany({
  //     data: [
  //       { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947', courseId: course.id },
  //       { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947', courseId: course.id },
  //     ],
  //   })
  // }

  // 创建几个课程  和 对应的章节 end ...


  // console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
