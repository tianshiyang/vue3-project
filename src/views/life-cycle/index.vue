<template>
  <div>
    <h1>生命周期</h1>
    keep-alive<input v-model="testKeepalive" type="text" /> {{ testKeepalive }}
    <h2>{{ testDefault }}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, onActivated } from "vue"
export default defineComponent({
  name: "index",
  setup() {
    let testKeepalive = ref("")
    let testDefault = ref("")
    console.log("beforeCreate/created -> setup")
    onMounted(() => {
      console.log("onMounted")
    })
    onActivated(() => {
      console.log("keep-alive, onActivated调用，除了写onActicated以外的生命周期方法只会初始化的时候调用一次")
    })
    return {
      testKeepalive,
      testDefault,
    }
  },
})
</script>
<style></style>
