<template>
  <div :class="{ dark: appConfig.theme.dark }">
    <p class="bg-blue-300 dark:bg-slate-600 dark:text-slate-200" @click="appConfig.title = 'hello'">
      appConfig: {{ appConfig.title }}
    </p>

    <label>
      dark mode:
      <NSwitch id="toggle" v-model:value="appConfig.theme.dark" />
    </label>
  </div>
</template>

<script setup lang="ts">
//配置标题
useHead({
  title: '配置页面',
  meta: [{ name: 'description', content: 'My amazing site2222.' }],
  bodyAttrs: {
    class: 'test',
  },
  titleTemplate: (s) => {
    console.log(s)
    return s ? `${s} - 村长的技术空间` : '村长的技术空间'
  },
  // script: [ { children: 'console.log(Hello world)' } ]
})
const appConfig = useAppConfig()

//获取环境变量
const runtimeConfig = useRuntimeConfig()
// console.log(runtimeConfig)

if (process.server) {
  // console.log('API Secret', runtimeConfig.apiSecret);
}
</script>
