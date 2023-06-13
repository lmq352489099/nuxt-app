<script setup lang="ts">
// 请求数据 $fetch

const { message } = await $fetch('/api/hello?userNmae=lmq')
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>
