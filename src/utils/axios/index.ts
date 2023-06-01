import { merge } from 'lodash-es'

import { VAxios } from './vAxios'
import { checkStatus } from './checkStatus'
import { joinTimestamp, showErr, showSuccess } from './helper'
import { ContentTypeEnum, RequestEnum, ResultEnum } from './httpEnum'
import type { AxiosTransform, CreateAxiosOptions } from './types'

const transform: AxiosTransform = {
  // 请求之前处理 config
  beforeRequestHook: (config, options) => {
    const { joinPrefix, urlPrefix, joinTime = false } = options

    if (joinPrefix && urlPrefix) {
      config.url = `${urlPrefix}${config.url}`
    }

    const params = config.params || {}
    const data = config.data || false
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      config.params = Object.assign(params || {}, joinTimestamp(joinTime))
    } else {
      if (
        Reflect.has(config, 'data') &&
        config.data &&
        Object.keys(config.data).length > 0
      ) {
        config.data = data
        config.params = params
      } else {
        // 非GET请求如果没有提供data，则将params视为data
        config.data = params
        config.params = undefined
      }
    }
    return config
  },

  /**
   * @description: 用于在项目中拦截器请求处理
   */
  requestInterceptors: config => {
    if (config.headers) {
      config.headers['Authorization'] = localStorage.getItem('token')
        ? `Bearer ${localStorage.getItem('token')}`
        : ''
    }
    return config
  },

  /**
   * @description: 用于在项目中拦截器响应处理
   */
  responseInterceptors: res => {
    return res
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: error => {
    // status 非 200 - 300 之间，或者网络原因等，逻辑会走这里
    const { code, message } = error || {}
    const err: string = error?.toString?.() ?? ''
    let errMessage = ''

    // 处理http请求错误码
    checkStatus(error?.response?.status)

    try {
      // 处理超时
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        errMessage = '请求超时'
      }
      // 处理网络错误
      if (err?.includes('Network Error')) {
        errMessage = '网络错误'
      }

      // 如果是超时或者网络原因，整个请求流程终止
      if (errMessage) {
        showErr(errMessage)
      }

      // 报错接着往下走
      return Promise.reject(error)
    } catch (error: any) {
      // 有可能上面showErr时，弹窗还未初始化
      if (errMessage) {
        /* eslint-disable no-alert */
        alert(errMessage)
      }

      throw new Error(error)
    }
  },

  /**
   * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误
   */
  transformRequestHook: (res, options) => {
    const { isReturnNativeResponse, errorMessageMode, successMessage } = options
    const { data: resData } = res

    // 是否返回原始响应数据。比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res
    }

    // 如果后端没返回内容直接抛出错误，走后面的错误处理逻辑
    if (!resData) {
      throw new Error('请求失败')
    }

    // 处理后端返回的数据
    const { code, data = {}, message } = resData

    // 如果成功，则直接返回数据
    const isSuccess = code === ResultEnum.SUCCESS

    if (isSuccess && successMessage) {
      showSuccess(successMessage)
    }

    if (!isSuccess && message) {
      showErr(message, errorMessageMode)
    }

    return {
      isSuccess,
      data,
      code,
      message,
    }
  },
}

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    merge(
      {
        authenticationScheme: '',
        timeout: 60 * 1000,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 如果是form-data格式
        // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          //  是否加入时间戳
          joinTime: false,
          // 是否允许重复请求
          canRepeat: true,
          // 是否记录 pending 状态下的请求，切换页面时会取消所有请求
          canCancel: true,
          // 是否携带token
          withToken: false,
          // 提示错误类型
          errorMessageMode: 'message',
        },
      },
      opt || {},
    ),
  )
}

const axios = createAxios({
  baseURL: '/',
})

export default axios
