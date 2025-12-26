import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosHeaders
} from 'axios'


const BASE_URL = import.meta.env.VITE_API_BASE_URL
console.log('API BASE URL:', BASE_URL)
const getAdminToken = () => localStorage.getItem('admin_token')
const getUserToken = () => localStorage.getItem('user_token')

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000
})

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const adminToken = getAdminToken()
    const userToken = getUserToken()
    const token = adminToken || userToken

    if (token) {
      // 🔥 CÁCH DUY NHẤT ĐÚNG
      if (!config.headers) {
        config.headers = new AxiosHeaders()
      }

      config.headers.set('Authorization', `Bearer ${token}`)
    }

    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

api.interceptors.response.use(
  (response: AxiosResponse) => response.data ?? response,
  (error: AxiosError) => {
    const status = error.response?.status
    const path = window.location.pathname

    if (status === 401) {
      if (path.startsWith('/admin')) {
        localStorage.removeItem('admin_token')
        if (path !== '/admin/login') {
          window.location.replace('/admin/login')
        }
      } else {
        localStorage.removeItem('user_token')
      }
    }

    return Promise.reject(error)
  }
)

export default api
