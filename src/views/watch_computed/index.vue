<template>
  <h1>computed start</h1>
  <h5>基础类型：{{ computed_number }}, {{ number }}</h5>
  <button @click="changeBaseType">基础类型Number</button>
  <h5>引用类型：{{ computed_quoteObj }}, {{ quoteObj }}</h5>
  <button @click="changeQuoteObj">引用类型Object</button>
</template>
<script lang="ts">
import { defineComponent, ref, computed, reactive } from "vue"
export default defineComponent({
  name: "index",
  setup() {
    // computed
    // 基础数字类型，computed主要进行计算，如果绑定的值改变，则computed也变化
    let number = ref(1)
    let computed_number = computed(() => {
      return number.value + "==="
    })
    let changeBaseType = () => {
      number.value++
    }
    // 引用类型
    // computed不可以对引用类型的数据做更改，可以返回对象或数组中某一项的值
    let quoteObj = reactive({
      name: "张三",
      id: 1,
    })
    let computed_quoteObj = computed(() => {
      return quoteObj.name
    })
    let changeQuoteObj = () => {
      quoteObj.name = "lisi"
      if (quoteObj.sex === undefined) {
        console.log("vue3 + ts 不可以进行类型转换，如vue2中''可以转化为false")
      }
    }
    return {
      number,
      computed_number,
      changeBaseType,
      quoteObj,
      computed_quoteObj,
      changeQuoteObj,
    }
  },
})
</script>
<style scoped></style>
