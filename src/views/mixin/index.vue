<template>
  <h1>vue mixin混入</h1>
  <h5>mixin中的data：{{ mixinData }}</h5>
  <button @click="sayHi">获取mixin中的方法</button>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import baseMixin from "./mixin"
export default defineComponent({
  name: "index",
  mixins: [baseMixin],
  setup() {
    // 如果被混入的文件中有跟mixin相同名称的数据，则使用被混入文件的数据
    // let mixinData = {
    //   name: "李四",
    // }
    return {
      // mixinData,
    }
  },
})
</script>
<style scoped></style>
