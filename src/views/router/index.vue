<template>
  <div>{{ route.query.msg }}</div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { useRoute } from "vue-router"
import { getDeliveryTicketList } from "@/api/index"
export default defineComponent({
  setup() {
    const route = useRoute()
    let params = {
      userId: "e6d95cf099954e0eb00827133d2853ae",
    }
    getDeliveryTicketList(params).then((res: any) => {
      console.log(res)
    })
    return {
      route,
    }
  },
})
</script>
