<template>
  <IxMenu
    mode="inline"
    :expanded-keys="expandedKeys"
    :data-source="dataSource"
    class="category-sider"
    @update:expandedKeys="onExpandedChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { VKey } from '@idux/cdk/utils'
import { MenuData } from '@idux/components/menu'

const dataSource: MenuData[] = [
  {
    type: 'sub',
    key: 'sub1',
    label: 'Sub Menu 1',
    children: [
      { key: 'item1', label: 'Item 1' },
      { key: 'item2', label: 'Item 2' },
    ],
  },
  {
    type: 'sub',
    key: 'sub4',
    label: 'Menu Sub 4',
    children: [
      { key: 'item10', label: 'Item 10' },
      { key: 'item11', label: 'Item 11' },
    ],
  },
  {
    type: 'sub',
    key: 'sub5',
    label: 'Menu Sub 5',
    children: [
      { key: 'item12', label: 'Item 12' },
      { key: 'item13', label: 'Item 13' },
    ],
  },
]

const expandedKeys = ref<VKey[]>([])

// 展开方式为手风琴式
const onExpandedChange = (keys: VKey[]) => {
  const lastExpandedKey = keys.find(key => !expandedKeys.value.includes(key))
  expandedKeys.value = lastExpandedKey ? [lastExpandedKey] : []
}
</script>

<style lang="less">
.category-sider {
  width: 100%;
  height: 100%;
}
</style>