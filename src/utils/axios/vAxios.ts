import { cloneDeep, isFunction, omit } from 'lodash-es'

import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import qs from 'qs'

import { AxiosCanceler } from './axiosCancel'
import { ContentTypeEnum, RequestEnum } from './httpEnum'
import type {
  CreateAxiosOptions,
  RequestOptions,
  Result,
  UploadFileParams,
} from './types'

export class VAxios {
  private axiosInstance: AxiosInstance
  private readonly options: CreateAxiosOptions

  constructor(options: CreateAxiosOptions) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  /**
   * @description:  Create VAxios instance
   */
  private createAxios(config: CreateAxiosOptions): void {
    this.axiosInstance = axios.create(config)
  }

  private getTransform() {
    const { transform } = this.options
    return transform
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance
  }

  /**
   * @description: Reconfigure VAxios
   */
  configAxios(config: CreateAxiosOptions) {
    if (!this.axiosInstance) {
      return
    }
    this.createAxios(config)
  }

  /**
   * @description: 设置请求头
   */
  setHeader(headers: any): void {
    if (!this.axiosInstance) {
      return
    }
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }

  /**
   * @description: 设置拦截器
   */
  private setupInterceptors() {
    const transform = this.getTransform()
    if (!transform) {
      return
    }
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    } = transform

    const axiosCanceler = new AxiosCanceler()

    this.axiosInstance.interceptors.request.use(
      config => {
        axiosCanceler.addPending(config)
        if (requestInterceptors && isFunction(requestInterceptors)) {
          config = requestInterceptors(config, this.options) as InternalAxiosRequestConfig<any>
        }
        return config
      },
      undefined,
    )

    // 请求错误拦截器
    requestInterceptorsCatch &&
      isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(
        undefined,
        requestInterceptorsCatch,
      )

    // 响应拦截器
    this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && axiosCanceler.removeCancel(res.config)
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res)
      }
      return res
    }, undefined)

    // 响应错误拦截器
    responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(
        undefined,
        responseInterceptorsCatch,
      )
  }

  /**
   * @description: 上传文件
   */
  uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
    const formData = new window.FormData()

    if (params.data) {
      Object.keys(params.data).forEach(key => {
        if (!params.data) {
          return
        }
        const value = params.data[key]
        if (Array.isArray(value)) {
          value.forEach(item => {
            formData.append(`${key}[]`, item)
          })
          return
        }

        formData.append(key, params.data[key])
      })
    }
    formData.append(params.name || 'file', params.file, params.filename)
    const customParams = omit(params, 'file', 'filename', 'file')

    Object.keys(customParams).forEach(key => {
      formData.append(key, customParams[key])
    })

    formData.delete('data')

    const aozheAuthorization = localStorage.getItem('token')
      ? `Bearer ${localStorage.getItem('token')}`
      : ''
    return this.axiosInstance.request<T>({
      ...config,
      method: 'POST',
      data: formData,
      headers: {
        Authorization: aozheAuthorization,
        'Content-type': ContentTypeEnum.FORM_DATA,
        ignoreCancelToken: true,
      },
    })
  }

  // support form-data
  supportFormData(config: AxiosRequestConfig) {
    const headers = config.headers || this.options.headers
    const contentType = headers?.['Content-Type'] || headers?.['content-type']

    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED ||
      !Reflect.has(config, 'data') ||
      config.method?.toUpperCase() === RequestEnum.GET
    ) {
      return config
    }

    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'brackets' }),
    }
  }

  get<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request<T>({ ...config, method: RequestEnum.GET }, options)
  }

  post<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request<T>({ ...config, method: RequestEnum.POST }, options)
  }

  put<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request<T>({ ...config, method: RequestEnum.PUT }, options)
  }

  delete<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request<T>({ ...config, method: RequestEnum.DELETE }, options)
  }

  request<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    let conf: CreateAxiosOptions = cloneDeep(config)
    const transform = this.getTransform()
    const { requestOptions } = this.options
    const opt: RequestOptions = Object.assign({}, requestOptions, options)
    const { beforeRequestHook, requestCatchHook, transformRequestHook } =
      transform || {}

    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt)
    }

    conf.requestOptions = opt
    conf = this.supportFormData(conf)

    return new Promise(resolve => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if (transformRequestHook && isFunction(transformRequestHook)) {
            const ret = transformRequestHook(res, opt)
            resolve(ret)
            return
          }
          resolve(res as unknown as T)
        })
        .catch((e: Error | AxiosError) => {
          if (requestCatchHook && isFunction(requestCatchHook)) {
            resolve(requestCatchHook(e, opt) as unknown as T)
            return
          }

          /* eslint-disable no-console */
          console.error(e) // 打印错误信息

          // 处理请求错误。默认请求错误应该返回 { isSuccess: false, data: {} }，避免中断业务逻辑
          resolve({ isSuccess: false, data: {} } as unknown as T)
        })
    })
  }
}
