<template>
  <div class="p-4">
    Counter1: {{ count1 }}
    Counter2: {{ count2 }}
    <div class="mt-2">
      <NButton @click="count1++;count2++  ">+</NButton>

      <NButton @click="count1--;count2--;">-</NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// const counter = useState('counter', () => Math.round(Math.random()) * 1000)

// 全局状态

const count1 = useConter() as Ref<number>
const count2 = ref(1)

</script>

<style scoped></style>
