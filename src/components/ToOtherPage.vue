<template>
  <div class="box" @click="goPath">
    <div class="title">标题：{{ title }}</div>
    <div class="info">描述：{{ info }}</div>
    <slot name="aa" :bb="{ name: 123 }"></slot>
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
      let params = {}
      if (props.path === "study-router") {
        params = {
          path: props.path,
          query: {
            msg: "测试vue-route 中的 query",
          },
        }
      } else {
        params = {
          path: props.path,
        }
      }
      router.push(params)
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
  border: 1px solid #aabbcc;
  cursor: pointer;
  margin: 10px 20px;
}
</style>
