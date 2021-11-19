<template>
  <div class="index_box">
    <ToOtherPage :title="title.reactiveRef" path="reactive-ref"></ToOtherPage>
    <ToOtherPage :title="title.router" path="study-router"></ToOtherPage>
    <ToOtherPage :title="title.component_emit" path="component_emit"></ToOtherPage>
    <ToOtherPage :title="title.watch_computed" path="watch-computed"></ToOtherPage>
    <ToOtherPage :title="title.if_show_class_for" path="if-show-class-for"></ToOtherPage>
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
      component_emit: "组件传值",
      watch_computed: "watch和computed",
      if_show_class_for: "v-for, v-if, v-show, :class学习",
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
