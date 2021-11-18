<template>
  <div style="color: aqua">父组件</div>
  <div>子组件对我说：{{ children_msg }}</div>
  <children :title="msg" @listen="listenToChildren"></children>
  {{ value }}
</template>
<script lang="ts">
import children from "@/views/component_emit/children.vue"
import { defineComponent, ref } from "vue"
export default defineComponent({
  components: {
    children,
  },
  name: "father",
  setup() {
    let msg = "我是父组件"
    let children_msg = ref("") // ref的作用是实现响应式， 如果没有ref则不能实现响应式（引用数据类型用reactive）
    let listenToChildren = (val) => {
      children_msg.value = val // 使用ref包裹的数据，需要通过.value的形式访问他的值
    }
    return {
      msg,
      children_msg,
      listenToChildren,
    }
  },
})
</script>
<style></style>
