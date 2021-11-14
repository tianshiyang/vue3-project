<template>
  <div class="box" @click="goPath">
    <div class="title">标题：{{ title }}</div>
    <div class="info">描述：{{ info }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      default: "暂无详情",
    },
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter()
    const goPath = () => {
      router.push({
        path: props.path,
      })
    }
    return {
      goPath,
    }
  },
})
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 140px;
  font-size: 16px;
  padding: 10px 20px;
  background: #fffccc;
  border: #aabbcc;
  cursor: pointer;
}
</style>
