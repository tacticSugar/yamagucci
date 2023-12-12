import type { AxiosInstance } from 'axios'
import axios from 'axios'
import Cookies from 'js-cookie'

import { COOKIES, ENV_AUTH_TOKEN, WEBAPI } from '@/src/constants/constants'

/** axios инстанс */
// ts-prune-ignore-next
export const axiosAPI: AxiosInstance = axios.create({
  baseURL: WEBAPI,
  withCredentials: false
})
/** axios инстанс post с bearer токеном */
// ts-prune-ignore-next
export const axiosBearerPost: AxiosInstance = axios.create({
  baseURL: WEBAPI,
  method: 'post'
})
/** axios инстанс get запроса с bearer токеном */
export const axiosBearerGet: AxiosInstance = axios.create({
  baseURL: WEBAPI,
  method: 'get'
})

axiosBearerPost.interceptors.request.use(
  async config => {
    /** токен */
    const userToken = Cookies.get(COOKIES.AUTH_TOKEN) || ENV_AUTH_TOKEN

    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`
    }

    return config
  },
  error => {
    Promise.reject(error)
  })

axiosBearerGet.interceptors.request.use(
  async config => {
    /** токен */
    const userToken = Cookies.get(COOKIES.AUTH_TOKEN) || ENV_AUTH_TOKEN

    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`
    }

    return config
  },
  error => {
    Promise.reject(error)
  })
