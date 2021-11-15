<template>
  <h1>{{ msg }}</h1>
  <h3>使用</h3>
  <h5>普通值</h5>
  <div>
    <span>{{ obj1 }}</span>
    <button @click="changeObj1">改变obj1</button>
    <span class="font-red">obj1是普通值，没有通过ref实现响应式</span>
  </div>
  <h5>ref</h5>
  <div>
    <span>{{ obj2 }}</span>
    <button @click="changeObj2">改变obj2</button>
    <span class="font-red">obj2是通过ref实现了双向绑定, 一般传入基本数据类型，且必须通过.value获取</span>
  </div>
  <h5>reactive</h5>
  <div>
    <span>{{ obj3 }}</span>
    <button @click="changeObj3">改变obj3</button>
    <span class="font-red">obj3通过reactive实现了双向绑定，传入的只能为引用数据类型</span>
  </div>
  <div class="line">====================================================</div>
  <h3>ref 的使用</h3>
  <h5>基础数据类型</h5>
  <div>
    <span>base: {{ base }} baseRef: {{ baseRef }}</span>
    <button @click="changeBaseRef">改变base</button>
    <span class="font-red"></span>
    <div class="info">注意：通过ref的方式绑定基础数据类型的数据，原数据不变</div>
  </div>
  <h5>引用数据类型</h5>
  <div>
    <span>obj2_1: {{ obj2_1 }} obj2_2: {{ obj2_2 }}</span>
    <button @click="changeObj2_1">改变obj2_1（绑定id）</button>
    <span class="font-red">obj2_2通过ref的方式绑定了obj2_1中的id属性，这时原数据没有发生改变，响应式数据进行了变化</span>
    <div class="info">注意：通过ref的方式绑定一个对象的某个属性，这个对象本身不发生变化（深拷贝）</div>
  </div>
  <div>
    <span>baseObj: {{ baseObj }} baseObjToRef: {{ baseObjToRef }}</span>
    <button @click="changeBaseToRef">改变baseObj（整个对象）</button>
    <span class="font-red">baseObj通过ref的方式绑定了baseObj，原数据和响应式数据都发生了改变</span>
    <div class="info">注意：通过ref的方式绑定一个对象，这个对象和响应式数据都改变</div>
  </div>
  <h5>ref 和 toRef 的区别</h5>
  <ol>
    <li>ref->复制出来一个新数据, 修改响应式数据不会影响原始数据</li>
    <li>toRef->引用, 修改响应式数据会影响原始数据</li>
    <li></li>
    <li></li>
    <li></li>
  </ol>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
  setup() {
    const router = useRoute()
    const msg = "reactive和ref的区别"
    let obj1 = {
      name: "张三",
      id: 1,
    }
    let obj2 = ref(10)
    let obj2_1 = {
      name: "ref",
      id: 4,
    }
    let obj2_2 = ref(obj2_1.id)
    let obj3 = reactive({
      name: "reactive",
      id: 3,
    })
    let base = 100
    let baseRef = ref(base)
    let changeBaseRef = () => {
      baseRef.value += 1
    }
    let changeObj1 = () => {
      obj1.id += 1
      console.log(obj1) // 可以打印出改变后的Obj1值
    }
    let changeObj2 = () => {
      obj2.value += 1
    }
    let changeObj2_1 = () => {
      obj2_2.value += 1
    }
    let changeObj3 = () => {
      obj3.id += 1
    }
    let baseObj = {
      name: "baseObj",
      id: 10,
    }
    let baseObjToRef = ref(baseObj)
    let changeBaseToRef = () => {
      baseObjToRef.value.id += 10
    }
    return {
      msg,
      router,
      obj1,
      obj2,
      obj2_1,
      obj2_2,
      obj3,
      base,
      baseRef,
      changeBaseRef,
      changeObj1,
      changeObj2,
      changeObj3,
      changeObj2_1,
      changeBaseToRef,
      baseObj,
      baseObjToRef,
    }
  },
})
</script>
<style>
.font-red {
  color: red;
}
.font-red ::before {
  content: "*";
  color: red;
}
.line {
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;
}
.info {
  color: #999999;
}
</style>
