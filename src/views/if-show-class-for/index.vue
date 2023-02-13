<template>
  <h1>v-for, v-if, v-show, :class</h1>
  <h3>v-for + computed返回年龄小于16的数组</h3>
  <h5 class="red">computed具有响应式，返回一个动态的数组</h5>
  <div class="content-box">
    <div class="table">
      <div class="header">
        <div class="stu-id">id</div>
        <div class="stu-id">姓名</div>
        <div class="stu-id">年龄</div>
        <div class="stu-id">操作</div>
      </div>
      <div v-for="(item, index) in before_14_tabel" :key="item.id">
        <div class="info-box">
          <div class="stu-id">{{ item.id }}</div>
          <div class="stu-id">{{ item.name }}</div>
          <div class="stu-id">{{ item.age }}</div>
          <div class="stu-id">
            <button @click="changeCurrent(index)">年龄++</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h3>v-if v-show start</h3>
  <div>
    <div v-if="if_flag">v-if展示</div>
    <button @click="changeIfFlag">v-if展示/隐藏</button>
  </div>
  <div>
    <div v-show="show_flag">v-show展示</div>
    <button @click="changeShowFlag">v-show展示/隐藏</button>
  </div>
  <div :class="if_flag ? 'red' : 'blue'">动态class文字颜色</div>
  <h3>双向绑定start</h3>
  <input v-model="input_model" /> 值：{{ input_model }}
</template>
<script lang="ts">
import { defineComponent, reactive, computed, ref } from "vue"
export default defineComponent({
  name: "index",
  setup() {
    let input_model = ref("")
    let before_14_tabel = computed(() => {
      return table_data.filter((res) => res.age < 16)
    })
    let table_data = reactive([
      {
        id: 1,
        name: "张三",
        age: 11,
      },
      {
        id: 2,
        name: "李四",
        age: 12,
      },
      {
        id: 3,
        name: "王武",
        age: 13,
      },
      {
        id: 4,
        name: "赵六",
        age: 14,
      },
      {
        id: 5,
        name: "田七",
        age: 15,
      },
    ])
    const person = reactive({
      name: "張三",
    })
    console.log(ref(111))
    let changeCurrent = (index) => {
      before_14_tabel.value[index].age++
    }
    let if_flag = ref(true)
    let changeIfFlag = () => {
      if_flag.value = !if_flag.value
    }
    let show_flag = ref(true)
    let changeShowFlag = () => {
      show_flag.value = !show_flag.value
    }
    return {
      changeCurrent,
      before_14_tabel,
      if_flag,
      changeIfFlag,
      show_flag,
      changeShowFlag,
      input_model,
    }
  },
})
</script>
<style scoped>
.content-box {
  width: 100vw;
  text-align: center;
}
.table {
  border-bottom: 1px solid #eeeeee;
}
.header {
  background: rgba(200, 200, 200, 0.3);
  display: flex;
  align-items: center;
  height: 80px;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
}
.info-box {
  display: flex;
}
.stu-id {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
