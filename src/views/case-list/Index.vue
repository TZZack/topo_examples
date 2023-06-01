<template>
  <IxLayout class="case-list">
    <IxLayoutHeader class="case-list__header">
      <div>案例平台库</div>
    </IxLayoutHeader>
    <IxLayoutSider class="case-list__sider">
      <CategorySider :data="menuData" />
    </IxLayoutSider>
    <IxLayoutContent class="case-list__content">
      <CategoryContent :data="contentData" />
    </IxLayoutContent>
  </IxLayout>
</template>

<script lang="ts" setup>
// import { useRouter } from 'vue-router'
import { MenuData } from '@idux/components/menu'
// import { clone, omit } from 'lodash-es'

import { fetchCaseTree } from '@/api/index'
import type { SubTypeNode } from '@/api/types'

import CategorySider from './Sider.vue'
import CategoryContent from './Content.vue'  

const menuData: MenuData[] = [] // 左侧sider数据
const contentData: SubTypeNode[] = [] // 内容区域数据
onMounted(async () => {
  const { data } = await fetchCaseTree()
  if (!data) {
    return
  }
  // 数据处理（TODO：还没传过去子组件）
  // 1. 内容区域数据
  data.forEach(item => {
    contentData.push(...item.children)
  })
  // 2. 左侧sider数据(TODO:少了key属性，所以报错)
  // const tempMenuData = clone(data) // clone一个出来，因为要改引用
  // menuData.push(...tempMenuData.map(rNode => {
  //   return {
  //     ...rNode,
  //     children: rNode.children.map(sNode => omit(sNode, 'children'))
  //   }
  // }))
})

// const router = useRouter()
// const jumpToPlayground = () => {
//   router.push({
//     name: 'playground',
//   })
// }
</script>

<style lang="less" scoped>
.case-list {
  &__header {
    display: flex;
    align-items: center;
    height: 64px;
    box-shadow: 0 2px 8px #f0f1f2;
    padding: 0 16px;
  }
  &__sider {
    width: 256px;
    padding-top: 8px;
  }
  &__content {
    padding: 8px;
  }
}
</style>