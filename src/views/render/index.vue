<script lang="ts">
import { h, ref } from "vue"
import { defineComponent } from "vue"
export default defineComponent({
  name: "index",
  render() {
    return h(
      "div",
      {
        onClick: this.say,
      },
      "render"
    )
  },
  setup() {
    const say = () => {
      console.log(11111)
    }
    return {
      say,
    }
  },
})
</script>
<style scoped>
.title {
  color: red;
}
</style>
