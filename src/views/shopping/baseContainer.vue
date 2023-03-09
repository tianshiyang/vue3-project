<template>
  <van-sticky>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="goBack" />
  </van-sticky>
  <router-view></router-view>
  <van-tabbar v-model="activeTabbar" @change="tabbarChange">
    <van-tabbar-item name="homePage" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="car" icon="search">购物车</van-tabbar-item>
    <van-tabbar-item name="mine" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { useRoute } from "vue-router"
import { ref } from "vue"

const title = useRoute().meta.title as string

const router = useRouter()
const goBack = () => {
  router.go(-1)
}

const activeTabbar = ref("homePage")
const tabbarChange = (value: string) => {
  router.push({
    path: `/shop/${value}`,
  })
}
</script>

<style scoped>
.box {
  height: 100vh;
  overflow: hidden;
}
.container {
  overflow: scroll;
}
</style>
