import { isBoolean, isFunction } from 'lodash-es'

import type { AxiosRequestConfig, CancelToken, Canceler } from 'axios'
import axios from 'axios'

import type { CreateAxiosOptions } from './types'

// 记录每个可重复请求的取消函数
let repeatMap = new Map<string, Canceler>()
// 记录每个请求的取消函数
let cancelMap = new Map<CancelToken, Canceler>()

export const getPendingUrl = (config: AxiosRequestConfig) =>
  [config.method, config.url].join('&')

export class AxiosCanceler {
  /**
   * 添加单个请求取消函数
   * @param {Object} config
   */
  addPending(config: CreateAxiosOptions) {
    const { canRepeat, canCancel } = config?.requestOptions || {}

    // 不可重复时，先取消已存在的请求
    if (isBoolean(canRepeat) && !canRepeat) {
      this.removeRepeat(config)
    }

    let cancelFn: Canceler = null as any
    const url = getPendingUrl(config)

    // 如果在业务中设置了 cancelToken，则不会加入 map
    if (!config.cancelToken) {
      // eslint-disable-next-line import/no-named-as-default-member
      config.cancelToken = new axios.CancelToken(cancel => {
        cancelFn = cancel
      })

      // 不可重复
      if (isBoolean(canRepeat) && !canRepeat) {
        repeatMap.set(url, () => {
          if (isBoolean(canCancel) && canCancel) {
            config.cancelToken && cancelMap.delete(config.cancelToken)
          }
          return cancelFn()
        })
      }

      // 可取消
      if (isBoolean(canCancel) && canCancel) {
        cancelMap.set(config.cancelToken, () => {
          if (isBoolean(canRepeat) && !canRepeat) {
            repeatMap.delete(url)
          }
          return cancelFn()
        })
      }
    }
  }

  /**
   * @description: 移除重复的 pending 请求
   * @param {Object} config
   */
  removeRepeat(config: CreateAxiosOptions) {
    const url = getPendingUrl(config)

    if (repeatMap.has(url)) {
      const cancel = repeatMap.get(url)
      cancel && cancel(url)
      repeatMap.delete(url)
    }
  }

  /**
   * @description: 移除可取消的请求
   * @param {Object} config
   */
  removeCancel(config: CreateAxiosOptions) {
    if (config.cancelToken && cancelMap.has(config.cancelToken)) {
      const cancel = cancelMap.get(config.cancelToken)
      const url = getPendingUrl(config)

      cancel && cancel(url)
      cancelMap.delete(config.cancelToken)
    }
  }

  /**
   * @description: 清除所有 pending 状态的请求
   */
  removeAllPending() {
    cancelMap.forEach(cancel => {
      cancel && isFunction(cancel) && cancel()
    })
    cancelMap.clear()
  }

  /**
   * @description: 重置
   */
  reset(): void {
    repeatMap = new Map<string, Canceler>()
    cancelMap = new Map<CancelToken, Canceler>()
  }
}
