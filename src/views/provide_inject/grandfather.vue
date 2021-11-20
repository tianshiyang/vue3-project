<template>
  <div class="box">
    <div class="grandfather">
      <h3>这是爷爷组件</h3>
      <h5>下面是孙子组件</h5>
      <son></son>
    </div>
  </div>
</template>
<script lang="ts">
import son from "./son.vue"
import { defineComponent } from "vue"
export default defineComponent({
  name: "grandfather",
  components: {
    son,
  },
  setup() {
    return {}
  },
})
</script>
<style scoped>
.grandfather {
  background: cornflowerblue;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 60%;
  height: 400px;
  border: 1px solid #999999;
}
</style>
