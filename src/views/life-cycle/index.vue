<template>
  <div>
    <h1>生命周期</h1>
    keep-alive<input v-model="testKeepalive" type="text" /> {{ testKeepalive }}
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
export default defineComponent({
  name: "index",
  setup() {
    let testKeepalive = ref("")
    console.log("beforeCreate/created -> setup")
    onMounted(() => {
      console.log("onMounted")
    })
    return {
      testKeepalive,
    }
  },
})
</script>
<style></style>
