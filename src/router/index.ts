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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
