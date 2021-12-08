const baseMixin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      mixinData: {
        name: "张三",
      },
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    sayHi() {
      console.log(this.mixinData.name)
    },
  },
}
export default baseMixin
