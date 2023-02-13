// import { KeepAlive } from "@vue/runtime-core"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: import("@/views/index.vue"),
  },
  {
    path: "/reactive-ref",
    name: "reactive-ref",
    component: () => import("@/views/reactive_ref/index.vue"),
  },
  {
    path: "/study-router",
    name: "study-router",
    component: () => import("@/views/router/index.vue"),
  },
  {
    path: "/component_emit",
    name: "component_emit",
    component: () => import("@/views/component_emit/father.vue"),
  },
  {
    path: "/watch-computed",
    name: "watch-computed",
    component: () => import("@/views/watch_computed/index.vue"),
  },
  {
    path: "/if-show-class-for",
    name: "if-show-class-for",
    component: () => import("@/views/if-show-class-for/index.vue"),
  },
  {
    path: "/provide-inject",
    name: "provide-inject",
    component: () => import("@/views/provide_inject/index.vue"),
  },
  {
    path: "/directive",
    name: "directive",
    component: () => import("@/views/directive/index.vue"),
  },
  {
    path: "/mixin",
    name: "mixin",
    component: () => import("@/views/mixin/index.vue"),
  },
  {
    path: "/vuex",
    name: "vuex",
    component: () => import("@/views/vuex/index.vue"),
  },
  {
    path: "/life-cycle",
    name: "life-cycle",
    meta: {
      KeepAlive: true,
    },
    component: () => import("@/views/life-cycle/index.vue"),
  },
  {
    path: "/render",
    name: "render",
    component: () => import("@/views/render/index.vue"),
  },
  {
    path: "/testDir",
    component: () => import("@/views/directive/directive.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
