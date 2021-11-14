<template>
  <div class="index_box">
    <ToOtherPage :title="title.reactiveRef" path="reactive-ref"></ToOtherPage>
    <ToOtherPage :title="title.router" path="study-router"></ToOtherPage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ToOtherPage from "@/components/ToOtherPage.vue"
export default defineComponent({
  components: {
    ToOtherPage,
  },
  setup() {
    const title = {
      reactiveRef: "reactice和ref的区别",
      router: "vue-router",
    }
    return {
      title,
    }
  },
})
</script>
<style scoped>
.index_box {
  display: flex;
}
</style>
