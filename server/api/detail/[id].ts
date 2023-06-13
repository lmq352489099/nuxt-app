import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// 文章目录
const postsDir = path.join(process.cwd(), 'content')

export default defineEventHandler(async (event) => {
  // url 路由参数
  const fileName = `${getRouterParam(event, 'id')}.md`

  // 获取请求体参数

  // const body = await readBody(event)

  // 获取查询参数 ?
  // const query = getQuery(event)

  // 获取文章内容
  const fullPath = path.join(postsDir, fileName)
  console.log(fullPath)

  try {
    fs.accessSync(fullPath)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    // 解析扉页信息
    const matterInfo = matter(fileContent)

    // 转换markdown为HTML
    const processedContent = await remark().use(html).process(matterInfo.content)
    const content = processedContent.toString()

    return {
      title: matterInfo.data.title,
      content,
    }
  }
  catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: '文章不存在',
    })
    // return sendError(
    //   event,
    //   createError({
    //     statusCode: 404,
    //     statusMessage: '文章不存在',
    //   })
    // )
  }
})
