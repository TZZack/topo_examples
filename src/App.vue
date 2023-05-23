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

<style scoped lang="less">

.topo-playground {
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
.ixp-height-full {
  height: 100vh;
}
</style>
