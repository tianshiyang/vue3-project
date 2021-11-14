<template>
  <index></index>
  <!-- <div id="nav"><router-link to="/"></router-link></div> -->
  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent } from "vue"
import index from "@/views/index.vue"
export default defineComponent({
  components: {
    index,
  },
})
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
