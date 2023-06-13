<script setup lang="ts">
// 会自动加上$前缀
// const { $format } = useNuxtApp()
const nuxtApp = useNuxtApp()

// const date1 = $format(new Date(),'YYYY---MM-DD')
// const date2 = $format(new Date(), 'YYYYMMDD')
const date1 = nuxtApp.$format(new Date(), 'YYYY---MM-DD')

nuxtApp.$format()
console.log(date1)
</script>

<template>
  <div>
    <ClientOnly>
      <p>{{ date1 }}</p>
      <!-- <p>{{ date2 }}</p> -->
    </ClientOnly>
  </div>
</template>

<style scoped></style>
