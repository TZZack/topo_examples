import { showErr } from './helper'

export function checkStatus(status: number): void {
  switch (status) {
    case 400:
      showErr('请求错误')
      break
    case 403:
      showErr('拒绝访问')
      break
    case 404:
      showErr('NOT FOUNT')
      break
    case 405:
      break
    case 408:
      showErr('请求超时')
      break
    case 500:
      showErr('服务器内部错误')
      break
    case 501:
      showErr('服务未实现')
      break
    case 502:
      showErr('系统繁忙，请稍候再试')
      break
    case 503:
      showErr('服务不可用')
      break
    case 504:
      showErr('网关超时')
      break
    case 505:
      showErr('HTTP版本不受支持')
      break
    default:
      break
  }
}
