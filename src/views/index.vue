<template>
  <div class="index_box">
    <ToOtherPage title="title" path="www.baidu.com"></ToOtherPage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ToOtherPage from "@/components/ToOtherPage.vue"
export default defineComponent({
  components: {
    ToOtherPage,
  },
})
</script>
<style scoped>
.index_box {
  display: flex;
}
</style>
