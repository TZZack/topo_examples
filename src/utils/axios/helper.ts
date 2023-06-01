// import { Message } from '@/plugins/idux/providers'

import { ErrorMessageMode } from './types'

/**
 * @description: 加入时间戳
 */
export function joinTimestamp(isJoin: boolean): Record<string, unknown> {
  return isJoin ? { _t: new Date().getTime() } : {}
}

/**
 * @description: 提示错误信息
 */
export function showErr(
  msg: string,
  errorMessageMode: ErrorMessageMode = 'message',
) {
  if (errorMessageMode === 'message') {
    // TODO: Message?.error(msg)
    console.error(msg)
  }
}

/**
 * @description: 提示成功信息
 */
export function showSuccess(msg: string) {
  // TODO: Message?.success(msg)
  console.log(msg)
}
