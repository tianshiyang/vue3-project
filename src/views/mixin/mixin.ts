const baseMixin = {
  data() {
    return {
      mixinData: {
        name: "张三",
      },
    }
  },
  methods: {
    sayHi() {
      console.log(this.mixinData.name)
    },
  },
}
export default baseMixin
