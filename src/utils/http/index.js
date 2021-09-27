import axios from 'axios'
// import { Toast } from 'vant'

const service = axios.create({
  // baseURL: '',
  // 统一超时时间，如有某个接口需要设置不同超时时间，可在调用接口是传入超时时间来覆盖这个超时时间
  timeout: 30 * 1000,
  // 请求是否携带cookie
  withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 200状态码
    if (response.status === 200) {
      return response.data
    }
  },
  err => {
    // 处理500等错误
    // if (err.response.status === 500) {
    //   Toast()
    // }

    return Promise.reject(err)
  }
)

export default service
