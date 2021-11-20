<template>
  <h2>provide 和 inject</h2>
  <button @click="changeIndexData">点击改变给后代组件传递的值</button>
  <grandfather></grandfather>
</template>
<script lang="ts">
import grandfather from "./grandfather.vue"
import { defineComponent, reactive } from "vue"
export default defineComponent({
  name: "index",
  components: {
    grandfather,
  },
  provide() {
    return {
      data: this.data,
      fn: this.updateComponent,
    }
  },
  setup() {
    let data = reactive({
      name: "张三",
      age: 11,
    })
    let changeIndexData = () => {
      data["sex"] = "男"
      data.name = "李四"
    }
    let updateComponent = () => {
      console.log("这是给后代传递的fn")
    }
    return {
      data,
      changeIndexData,
      updateComponent,
    }
  },
})
</script>
<style scoped></style>
