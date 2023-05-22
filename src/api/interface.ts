export interface ApiReturn<T = any> {
  data: T
  success: 0 | 1
  msg?: string
}