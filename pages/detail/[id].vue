<script lang="ts" setup>
import type { NuxtError } from '#app'

// 获取文章id

const route = useRoute()
const store = useUser()
let  $route =  route 

// 定义中间件,守护路由

// definePageMeta({
//   middleware: 'auth',
// })

interface Detail {
  content: string
  title: string
}

// const res: Detail = await $fetch(`/api/detail/${route.params.id}`)
// const { title, content } = res
// console.log(title, content)

function fetchPost() {
  return $fetch(`/api/detail/${route.params.id}`, {
    headers: store.isLogin ? { token: 'Atoken' } : {},
    onResponseError({ response }) {
      if (response.status == 401) {
        // router.push('/login?callback=' + route.path)
        navigateTo(`/login?callback=${route.path}`)
      }
    },
  })
}
const { data, pending, error } = await useAsyncData(fetchPost)
// console.log(error)

const errorMsg = computed(() => error.value as NuxtError)

// watchEffect(() => {
//   if (unref(error)) {
//     showError(errorMsg.value)
//   }
// })

// 请求体

// $fetch('/api/detail/', {
//   body: {
//     xx: 'xxx',
//   },
// })
// 省略部分代码...
// 增加评论相关逻辑，注意登录状态的获取和使用
const value = useState('comment', () => '')
// const isLogin = useLogin()

const { isLogin } = storeToRefs(store)

const router = useRouter()
function onSubmit() {
  if (isLogin.value) {
    // 提交留言...
    value.value = ''
  }
  else {
    // 要求登录
    router.push(`/login?callback=${route.path}`)
  }
}
</script>

<template>
  <div>
    <h1>子路由 detail page 1 {{ pending }}</h1>

    <div class="p-5">
      <div v-if="error">
        {{ errorMsg }}}
      </div>
      <div v-else-if="pending">
        加载中
      </div>
      <div v-else>
        222222
        <h1>{{ data?.title }}</h1>
        <div v-html="data?.content" />
      </div>
    </div>

    <p>路由传参参数:{{ $route.params.id }}</p>

    <!-- 评论区 -->
    <div class="py-2">
      <NInput v-model:value="value" type="textarea" placeholder="输入评论" />
      <NButton @click="onSubmit">
        发送
      </NButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  color: var(--link-color);
}
</style>
