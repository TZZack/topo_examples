<template>
  <div class="category-content">
    <div class="category-content-title">
      <IxSpace :align="'center'">
        <h2 class="font-bold">
          示例
        </h2>
        <h4 class="text-[#b9b9b9]">
          Demo
        </h4>
      </IxSpace>
    </div>
    <div class="category-content-main">
      <IxSpace :size="36">
        <IxCard
          :shadow="false"
          cover="/img/er.png"
          @click="clickDemo"
        >
          <span>Er图</span>
        </IxCard>
      </IxSpace>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SubTypeNode } from '@/api/types'
import { useRouter } from 'vue-router'

interface Props {
  data: SubTypeNode[]
}
withDefaults(defineProps<Props>(), {
  data: () => []
})

const router = useRouter()

const clickDemo = () => {
  router.push({
    name: 'playground'
  })
}
</script>

<style lang="less" scoped>
.category-content {
  width: 100%;
  height: 100%;
  padding: 16px 30px;
  display: flex;
  flex-direction: column;

  &-title {
    margin-bottom: 16px;
    border-bottom: 1px dashed #e1dfdf;
  }

  &-main {
    flex: 1;

    :deep(.ix-card) {
      transition: .3s;
    }
    :deep(.ix-card:hover) {
      cursor: pointer;
      transform: scale(1.05);
    }

    :deep(.ix-card-cover) {
      width: 240px;
      height: 160px;
      border: 1px solid #efefef;
      box-shadow: 0 0 20px #0000000d;
    }
    :deep(.ix-card-cover img) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>