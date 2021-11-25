<template>
  <!-- keepAlive固定写法，:is="Component"，component是vue中的特殊组件，:is是用来绑定指定组件，这里是与路由对应的页面绑定 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.KeepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.KeepAlive" />
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
