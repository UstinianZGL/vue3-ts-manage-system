import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface LYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface LYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LYRequestInterceptors<T>
  showLoading?: boolean
  token?: string
}
