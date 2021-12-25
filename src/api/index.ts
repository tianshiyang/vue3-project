import request from "@/util/request"
import qs from "qs"
function getDeliveryTicketList(params: any): any {
  return request({
    method: "get",
    url: "/delivery/get/ticket/list.json?" + qs.stringify(params),
  })
}
export { getDeliveryTicketList }
