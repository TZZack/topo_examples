<template>
  <div class="playground-file-tree">
    <IxTree 
      v-model:expanded-keys="treeExpandKeys"
      v-model:selected-keys="treeSelectedKeys" 
      v-bind="$attrs"
      :disabled="treeNodeDisable"
      :data-source="treeData"
      :show-line="true"
      :auto-height="true"
      blocked  
    >
      <template #prefix="{ node }">
        <SvgIcon
          v-if="!!prefixIconMap[node.fileType as FileType]"
          :name="prefixIconMap[node.fileType as FileType]"
        />
      </template>
    </IxTree>
  </div>
</template>

<script lang="ts" setup>
import type { TreeNode } from '@idux/components/tree'
import type { VKey } from '@idux/cdk/utils'
import { ref } from 'vue'

enum FileType {
  fold = 'fold',
  vue = 'vue',
  ts = 'ts'
}

const prefixIconMap = {
  [FileType.fold]: '',
  [FileType.vue]: 'Vue',
  [FileType.ts]: 'typescript'
}

const treeExpandKeys = ref<VKey[]>(['0'])
const treeSelectedKeys = ref<VKey[]>(['root'])

const treeNodeDisable = (node: TreeNode) => {
  if (node.fileType === FileType.fold) {
    return true
  }

  return treeSelectedKeys.value.includes(node.key as VKey)
}

const treeData = ref<TreeNode[]>([
  {
    label: 'src',
    key: '0',
    fileType: 'fold',
    children: [
      {
        label: 'App.vue',
        key: 'root',
        fileType: 'vue',
        fullPath: 'App.vue',
      },
      {
        label: 'node',
        key: '0-1',
        fileType: 'fold',
        children: [
          {
            label: 'const.ts',
            key: '0-1-1',
            fileType: 'ts',
            fullPath: 'node/const.ts',
          },
        ]
      },
      {
        label: 'util',
        key: '0-2',
        fileType: 'fold',
        children: [
          {
            label: 'index.ts',
            key: '0-2-1',
            fileType: 'ts',
            fullPath: 'util/index.ts',
          },
        ]
      }
    ],
  },
])
</script>

<style lang="less" scoped>
.playground-file-tree {
    width: 300px;
    height: 100%;
    border-right: 1px solid #e1e5eb;
    padding: 38px 16px 0 16px;

    :deep(.ix-tree-node-disabled .ix-tree-node-content) {
      cursor: default;
    }

    :deep(.ix-tree-node-content-label) {
      color: #2f3540;
    }

    :deep(.ix-tree-node-selected .ix-tree-node-content-label) {
      color: #027aff !important;
    }
}
</style>