<template>
  <div style="color: aqua">父组件</div>
  <div>子组件对我说：{{ children_msg.value }}</div>
  <children :title="msg" @listen="listenToChildren"></children>
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
    let children_msg = ""
    const listenToChildren = (val) => {
      children_msg = ref(val)
      console.log(children_msg.value)
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
