import indexFileCode from '@/demos/er-demo/Index.vue?raw'
import constFileCode from '@/demos/er-demo/const.ts?raw'

const indexFileName = 'index.vue'
const constFileName = 'const.ts'

export const mockData = () => {
  return [{
    label: 'src',
    key: '0',
    fileType: 'fold',
    path: '',
    fileName: '',
    fileCode: '',
    parent: null
  }, {
    label: indexFileName,
    key: '0-1',
    fileType: 'vue',
    path: '/index.vue',
    fileName: indexFileName,
    fileCode: indexFileCode,
    parent: '0'
  }, {
    label: constFileName,
    key: '0-2',
    fileType: 'ts',
    path: '/const.ts',
    fileName: constFileName,
    fileCode: constFileCode,
    parent: '0'
  }]
}