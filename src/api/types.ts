export interface ApiReturn<T = any> {
  data: T
  success: 0 | 1
  msg?: string
}

export enum NodeType {
  ParentType = 1,
  SubType = 2,
  Case = 3,
}

export interface CaseNode {
  id: string
  label: string
  type: NodeType.Case
  imageSrc: string // 图片地址
  engineType: string  // 可视化引擎类型
}

export interface SubTypeNode {
  id: string
  label: string
  type: NodeType.SubType
  children: CaseNode[]
}

// 案例树
export interface CaseTree {
  id: string
  label: string
  type: NodeType.ParentType
  children: SubTypeNode[]
}