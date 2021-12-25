import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"
const service = axios.create({
  baseURL: "http://yanshou10.honganhome.com/api",
  timeout: 10000,
})
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config["isMock"] && config["mock"]) {
      return config
    }
    if (config.method === "get") {
      console.log(config)
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
service.interceptors.response.use((res: AxiosResponse) => {
  return res.data.content
})
export default service
