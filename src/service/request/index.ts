import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import type { LYRequestInterceptors, LYRequestConfig } from './type'

const DEAFULT_LOADING = true

class LYRequest {
  instance: AxiosInstance
  interceptors?: LYRequestInterceptors
  showLoading: boolean
  loading?: any

  constructor(config: LYRequestConfig) {
    //创建axios实例
    this.instance = axios.create(config)

    if (typeof config.headers?.set === 'function') {
      config.headers.set('Access-Control-Allow-Origin', '*')
    }

    //保存基本信息
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors

    //使用拦截器
    //1.从config中取出的拦截器都是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器：请求成功的拦截')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }

        return config
      },
      (err) => {
        console.log('所有实例都有的拦截器：请求失败的拦截')

        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器：相应成功的拦截')

        //将loading移除
        this.loading?.close()

        return res
      },
      (err) => {
        console.log('所有实例都有的拦截器：相应失败的拦截')

        //将loading移除
        this.loading?.close()

        //判断错误的类型
        if (err.response.status === 404) {
          window.alert('404错误')
        }

        return err
      }
    )
  }

  Request<T>(config: LYRequestConfig<T>): Promise<T> {
    return new Promise<T>((reslove, reject) => {
      //1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }

      //2.判断是否需要显示loading
      if (config.showLoading == false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          //1 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          //2 将showLoading设置为true 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING

          //3 将结果reslove出去
          reslove(res)
        })
        .catch((err) => {
          //2 将showLoading设置为true 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING

          reject(err)

          return err
        })
    })
  }

  get<T>(config: LYRequestConfig<T>): Promise<T> {
    return this.Request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: LYRequestConfig<T>): Promise<T> {
    return this.Request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: LYRequestConfig<T>): Promise<T> {
    return this.Request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: LYRequestConfig<T>): Promise<T> {
    return this.Request<T>({ ...config, method: 'PATCH' })
  }
}

export default LYRequest
