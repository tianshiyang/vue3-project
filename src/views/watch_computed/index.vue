<template>
  <h1>computed start</h1>
  <h5>基础类型：{{ computed_number }}, {{ number }}</h5>
  <button @click="changeBaseType">基础类型Number</button>
  <h5>引用类型：{{ computed_quoteObj }}, {{ quoteObj }}</h5>
  <button @click="changeQuoteObj">引用类型Object</button>
  <h1>watch start</h1>
  <h5>{{ base_string }}, {{ watch_change_flag }}</h5>
  <button @click="changeBaseString">wathch基础类型</button>
  <h5>{{ watch_quote }}, {{ watch_quote_change_flag }}</h5>
  <button @click="watchQuoteButton">watch引用类型</button>
</template>
<script lang="ts">
import { defineComponent, ref, computed, reactive, watch } from "vue"
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
      if (quoteObj["sex"] === undefined) {
        quoteObj["sex"] = 1
        // ts中如果一个属性不存在可以obj["something"]的方式赋值
        console.log(quoteObj["sex"], quoteObj["name"])
        console.log("vue3 + ts 不可以进行类型转换，如vue2中''可以转化为false")
      }
    }
    // watch
    // 基础类型
    /**
     * watch只有在视图层面发生改变的时候才会改变
     * 例：
     * let base_string = "这是一个字符串"
     * let changeBaseString = () => {
     * base_string.value = "改变字符串"
     * } // 不发生改变
     */
    // let base_string = "这是一个字符串"
    let watch_change_flag = ref("检测watch改变")
    let base_string = ref("这是一个字符串")
    let changeBaseString = () => {
      base_string.value += "="
    }
    watch(base_string, () => {
      watch_change_flag.value += "="
    })
    // 引用类型
    let watch_quote = reactive({
      name: "张三",
      age: 22,
    })
    let watch_quote_change_flag = ref("watch引用类型改变")
    let watchQuoteButton = () => {
      watch_quote.name += "+"
    }
    // 监听整个对象
    // watch(watch_quote, () => {
    //   watch_quote_change_flag.value += "="
    // })
    // 监听对象中的某一项
    watch(
      () => watch_quote.name,
      (newVal, oldVal) => {
        console.log("新值" + newVal)
        console.log("旧值" + oldVal)
        watch_quote_change_flag.value += "="
      }
    )
    // watcheffect 初始化就执行一次，那个值改变了就是监听的谁
    // watchEffect(() => {
    //   // let name = watch_quote.name
    //   // watch_quote["sex"] = 1
    //   watch_quote.name += 1
    //   watch_quote_change_flag.value += "="
    //   console.log("初始化就执行")
    // })
    return {
      number,
      computed_number,
      changeBaseType,
      quoteObj,
      computed_quoteObj,
      changeQuoteObj,
      base_string,
      changeBaseString,
      watch_change_flag,
      watch_quote,
      watchQuoteButton,
      watch_quote_change_flag,
    }
  },
})
</script>
<style scoped></style>
