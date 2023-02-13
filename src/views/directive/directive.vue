<template>
  <img v-lazy-img="item.src" v-for="(item, index) in images.list" :key="index" />
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity"

let images = reactive({
  list: [
    {
      src: require("../../assets/1.jpg"),
    },
    {
      src: require("../../assets/2.jpg"),
    },
    {
      src: require("../../assets/3.jpg"),
    },
    {
      src: require("../../assets/5.jpg"),
    },
    {
      src: require("../../assets/7.jpg"),
    },
  ],
})
</script>

<style scoped>
img {
  min-width: 500px;
  min-height: 800px;
}
</style>
