<template>
  <IxMessageProvider>
    <IxSpin
      v-if="isLoading"
      tip="loading..."
    >
      <div class="ixp-height-full" />
    </IxSpin>
    <div class="topo-playground flex flex-col ixp-height-full">
      <PlaygroundHeader :store="store" />
      <div class="h-[calc(100%-48px)] flex flex-row">
        <PlaygroundFileTree
          :on-selected-change="onNodeSelectChange"
          :data-source="treeData"
        />
        <Repl
          class="grow"
          auto-resize
          :show-compile-output="false"
          :show-import-map="false"
          :store="store"
          :clear-console="false"
        />
      </div>
    </div>
  </IxMessageProvider>
</template>

<script lang="ts" setup>
import { ReplStore } from '@/repl-store'
import { Repl } from '@tzzack/vue-repl'
import type { TreeNode } from '@idux/components/tree'
import type { VKey } from '@idux/cdk/utils'
import { mockData } from '@/mock/er'
import {testApi} from '@/api/index'
import {FileType} from '@/types/playground'

interface FileInfo {
  label: string
  key: VKey
  fileType: FileType
  path: string
  fileName: string
  fileCode: string
  parent: string | null
}

const isLoading = ref(true)

// todo: 考虑把这个replstore实例存到pinia中
const store = new ReplStore({
  serializedState: location.hash.slice(1),
})

store.init().then(() => {
  isLoading.value = false
})

watchEffect(() => history.replaceState({}, '', store.serialize()))

const onNodeSelectChange = ( 
  selectedKeys: VKey[],
  selectedNodes: TreeNode[]
  ) => {
    store.setActive(selectedNodes[0].label ?? '')
}

const treeData = ref<FileInfo[]>([])
const mock = mockData() as FileInfo[]
treeData.value = mock

const filesData = {} as Record<string, string>

mock.filter(item => item.fileType !== FileType.fold).forEach((item: FileInfo) => {
  filesData[item.fileName] = item.fileCode
})

testApi()

store.setFiles(filesData, 'index.vue')
</script>

<style scoped lang="less">

.topo-playground {
  :deep(.vue-repl .file-selector) {
    display: none;
  }

  :deep(.editor-container) {
    height: 100%;
    border-top: 1px solid #e1e5eb;
  }
}
.ixp-height-full {
  height: 100vh;
}
</style>
