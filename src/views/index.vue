<template>
  <div class="index_box">
    <ToOtherPage :title="title.reactiveRef" path="reactive-ref"></ToOtherPage>
    <ToOtherPage :title="title.router" path="study-router"></ToOtherPage>
    <ToOtherPage :title="title.component_emit" path="component_emit"></ToOtherPage>
    <ToOtherPage :title="title.watch_computed" path="watch-computed"></ToOtherPage>
    <ToOtherPage :title="title.if_show_class_for" path="if-show-class-for"></ToOtherPage>
    <ToOtherPage :title="title.vue_bus" path="provide-inject"></ToOtherPage>
    <ToOtherPage :title="title.directive" path="directive"></ToOtherPage>
    <ToOtherPage :title="title.mixin" path="mixin"></ToOtherPage>
    <ToOtherPage :title="title.vuex" path="vuex"></ToOtherPage>
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
      vue_bus: "provide-inject用法",
      directive: "vue-自定义指令",
      mixin: "mixin混入",
      vuex: "vuex",
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
