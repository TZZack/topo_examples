<template>
  <div class="playground">
    <IxSpin
      v-if="isLoading"
      tip="loading..."
    >
      <div class="playground-spin" />
    </IxSpin>
    <HeaderComp :store="store" />
    <div class="h-[calc(100%-48px)] flex flex-row">
      <FileTree
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
</template>

<script lang="ts" setup>
import { Repl } from '@tzzack/vue-repl'

import HeaderComp from './Header.vue'
import FileTree from './FileTree.vue'

import { ReplStore } from '@/repl-store'
import {getDemo1} from '@/api/index'
import {FileInfo, FileType} from '@/types/playground'
import {transformDataToTree} from '@/utils/business'

const isLoading = ref(true)

// todo: 考虑把这个replstore实例存到pinia中
const store = new ReplStore({
  serializedState: location.hash.slice(1),
})

watchEffect(() => history.replaceState({}, '', store.serialize()))

const onNodeSelectChange = ( 
  selectedKeys: string[],
  selectedNodes: FileInfo[]
  ) => {
    store.setActive(selectedNodes[0]?.path)
}

const treeData = ref<FileInfo[]>([])
const filesData = {} as Record<string, string>

onMounted(async () => {
  const { data } = await getDemo1()
  const fileData = data.fileList as FileInfo[]
  treeData.value = transformDataToTree(fileData)
  fileData.filter(item => item.fileType !== FileType.fold).forEach((item: FileInfo) => {
    filesData[item.path] = item.fileCode
  })

  store.init().then(() => {
    isLoading.value = false
  })

  store.setFiles(filesData, 'index.vue')
})
</script>

<style lang="less" scoped>
.playground {
  height: 100%;
  &-spin {
    height: 100vh;
  }

  // 修改vue-repl的样式
  :deep(.vue-repl .file-selector) {
    display: none;
  }

  :deep(.editor-container) {
    height: 100%;
    border-top: 1px solid #e1e5eb;
  }

  :deep(.vue-repl .tab-buttons) {
    display: none;
  }

  :deep(.vue-repl .right) {
    border: 1px solid #e1e5eb;
    border-right: none;
  }

  :deep(.output-container) {
    height: 100%;
  }
}
</style>