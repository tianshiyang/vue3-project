import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

const app = createApp(App)

app.directive("lazy-img", {
  beforeMount(el, binding) {
    el["data-src"] = binding.value
  },
  mounted(el) {
    window.addEventListener("scroll", () => {
      if (el.offsetTop < document.documentElement.scrollTop + window.innerHeight) {
        el["src"] = el["data-src"]
      }
    })
    console.log(el.offsetTop)
  },
})
app.use(store).use(router).mount("#app")
