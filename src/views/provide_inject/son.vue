<template>
  <div class="son">
    <h5>根组件传过来的name：{{ data.name }}</h5>
    <h5>根组件传过来的age：{{ data.age }}</h5>
    <button @click="fn">点击获取祖先组件传来的function</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue"
export default defineComponent({
  name: "son",
  setup() {
    let data = inject("data")
    let fn = inject("fn")
    return {
      data,
      fn,
    }
  },
})
</script>
<style scoped>
.son {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 50%;
  background: cornsilk;
}
</style>
