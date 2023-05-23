import type {FileInfo} from '@/types/playground'

export function transformDataToTree(list: FileInfo[]) {
  const obj = {} as any
  const res = [] as any
  list.forEach(item => {
    obj[item.key as keyof typeof obj] = item
  })
  list.forEach(item => {
    if (item.parent !== null) {
      obj[item.parent as string]['children'] ? 
      obj[item.parent as string]['children'].push(item) : 
      obj[item.parent as string]['children'] = [item]
    } else {
      res.push(item)
    }
  })
  return res
}