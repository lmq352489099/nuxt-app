<script setup lang="ts">
definePageMeta({
  // middleware(to, form) {
  //   console.log('匿名中间件,具体页面执行,不可复用!', to, form)
  // },
  middleware: ['amid', 'bmid'],
})
onMounted(() => {
  console.log('2222222')
})
</script>

<template>
  <div>
    <h1>mid Page</h1>
  </div>
</template>

<style scoped></style>
