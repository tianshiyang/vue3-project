<template>
  <div style="color: brown">子组件</div>
  <div>父组件传过来的值为：{{ title }}</div>
  <button @click="sayToFather">向父组件说话</button>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "children",
  props: {
    title: {
      type: String,
    },
  },
  setup(props, context) {
    const sayToFather = () => {
      const ask = "我是子组件，我对父组件说话"
      context.emit("listen", ask)
    }
    return {
      sayToFather,
    }
  },
})
</script>
<style></style>
