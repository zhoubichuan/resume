import axios from "axios"
import { Loading } from "element-ui"
import Cookies from "js-cookie"

//基于axios基本配置创建实例
const service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    source: "YTO-STEWARD",
  },
})

let loadingInstance: any

// 创建http请求拦截器
service.interceptors.request.use(
  (config: any) => {
    config.headers["Content-Type"] = "application/json"
    loadingInstance = Loading.service({
      lock: true,
      text: "加载中,请稍后...",
      background: "rgba(255,255,255,0.7)",
    })
    let token = Cookies.get("jwt-token")
    if (token) {
      config.headers["jwt-token"] = token
    }
    return config
  },
  (err: any) => {
    return Promise.reject(err)
  }
)

// 创建http返回拦截器
service.interceptors.response.use(
  (response: any) => {
    loadingInstance && loadingInstance.close()
    return response.data
  },
  (err: any) => {
    let { headers, config } = err.response
    if (headers["jwt-token"]) {
      Cookies.set("jwt-token", headers["jwt-token"], {
        expires: 1 / 24,
      })
      Cookies.set("token-expires", Date.now(), {
        expires: 1 / 24,
      })
    }
    loadingInstance && loadingInstance.close()
    return Promise.reject(err)
  }
)

export default service
