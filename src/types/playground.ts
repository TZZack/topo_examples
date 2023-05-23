export enum FileType {
  fold = 'fold',
  vue = 'vue',
  ts = 'ts'
}

export interface FileInfo {
  label: string
  key: string
  fileType: FileType
  path: string
  fileName: string
  fileCode: string
  parent: string | null
}