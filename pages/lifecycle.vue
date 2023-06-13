<script setup lang="ts">
// declare module '@vue/runtime-core' {
//   // declare your own store states
//   // interface State {
//   //   cb: (msg: string) => any
//   // }
//   type State = (msg: string) => any

//   // provide typings for `this.$store`
//   interface ComponentCustomProperties {
//     $alert: State
//   }
// }

const ins = getCurrentInstance()
onMounted(() => {
  ins?.proxy?.$alert('component mounted！')
})
</script>

<template>
  <div>1111</div>
</template>

<style scoped></style>
