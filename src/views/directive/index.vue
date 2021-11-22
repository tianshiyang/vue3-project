<template>
  <button v-copy="copyText">{{ copyText }}</button>
  <button v-copy="copyText2">{{ copyText2 }}</button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: "index",
  directives: {
    copy(el, binding) {
      el.addEventListener("click", () => {
        // 创建textarea标签
        const textarea = document.createElement("textarea")
        textarea.readOnly = true
        textarea.style.position = "absolute"
        textarea.style.left = "-9999px"
        textarea.value = binding.value
        document.body.appendChild(textarea)
        textarea.select()
        const result = document.execCommand("Copy")
        if (result) {
          console.log("复制成功")
        } else {
          console.log("复制失败")
        }
        document.body.removeChild(textarea)
      })
    },
  },
  setup() {
    let copyText = ref("测试选中即复制的文字")
    let copyText2 = ref("复制")
    return {
      copyText,
      copyText2,
    }
  },
})
</script>
<style scoped></style>
