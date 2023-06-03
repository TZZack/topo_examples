<template>
  <IxMenu
    v-model:selectedKeys="selectedKeys"
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
    label: '案例',
    icon: 'dashboard',
    children: [
      { key: 'item1', label: '示例' },
    ],
  },
]

const expandedKeys = ref<VKey[]>(['sub1'])
const selectedKeys = ref<VKey[]>(['item1'])

// 展开方式为手风琴式
const onExpandedChange = (keys: VKey[]) => {
  const lastExpandedKey = keys.find(key => !expandedKeys.value.includes(key))
  expandedKeys.value = lastExpandedKey ? [lastExpandedKey] : []
}
</script>

<style lang="less" scoped>
.category-sider {
  width: 100%;
  height: 100%;
}
</style>