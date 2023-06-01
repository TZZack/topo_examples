import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export type ErrorMessageMode = 'none' | 'message' | undefined
export type SuccessMessageMode = ErrorMessageMode

export interface RequestOptions {
  // 是否返回 axios 原始的返回值，包括响应头等等
  isReturnNativeResponse?: boolean
  // 是否给请求的 url 加上前缀路径
  joinPrefix?: boolean
  // 请求拼接路径
  urlPrefix?: string
  // 请求失败提示：none:无 message
  errorMessageMode?: ErrorMessageMode
  // 请求成功提示：传入要提示的信息
  successMessage?: string
  // Whether to add a timestamp
  joinTime?: boolean
  // 是否携带 token
  withToken?: boolean
  // 是否可存在重复的请求（相同的 url 和 method）
  canRepeat?: boolean
  // 是否在页面切换时取消 pending 状态下的请求
  canCancel?: boolean
}

// 后端返回的值
export interface Result<T = any> {
  code: number
  message: string
  data: T
}

// 后端返回值的转换结果
export interface TransformResult<T = any> extends Result<T> {
  isSuccess: boolean
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Recordable
  // File parameter interface field name
  name?: string
  // file name
  file: File | Blob
  // file name
  filename?: string
  [key: string]: any
}

// 初始化 iPaaS 实例的配置
export interface CreateAxiosOptions extends AxiosRequestConfig {
  // 身份验证方案 一般分为Basic和Bearer，具体参考https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml
  authenticationScheme?: string
  transform?: AxiosTransform
  requestOptions?: RequestOptions
}

// 请求钩子
export abstract class AxiosTransform {
  /**
   * @description: 请求发起前的 hook，用于处理配置
   */
  beforeRequestHook?: (
    config: AxiosRequestConfig,
    options: RequestOptions,
  ) => AxiosRequestConfig

  /**
   * @description: 响应结果的转换 hook
   */
  transformRequestHook?: (
    res: AxiosResponse<Result>,
    options: RequestOptions,
  ) => any

  /**
   * @description: 请求失败的处理 hook
   */
  requestCatchHook?: (
    e: Error,
    options: RequestOptions,
  ) => Recordable & { isSuccess: false }

  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (
    config: AxiosRequestConfig,
    options: CreateAxiosOptions,
  ) => AxiosRequestConfig

  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: any) => void
}
