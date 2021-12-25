<template>
  <h1>vuex中的数据{{ store.state.count }}</h1>
  <button @click="changeStoreCount">改变vuex数据</button>
  <button @click="asyncChangeStoreCount">异步改变vuex数据</button>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { useStore } from "vuex"
export default defineComponent({
  name: "index",
  setup() {
    const store = useStore()
    console.log(store)
    const changeStoreCount = () => {
      store.commit("addCount", 1)
    }
    const asyncChangeStoreCount = () => {
      setTimeout(() => {
        store.dispatch("asyncAddStoreCount", 2)
      }, 1000)
    }
    return { store, changeStoreCount, asyncChangeStoreCount }
  },
})
</script>
<style scoped></style>
