<template>
  <div class="category-content">
    content
  </div>
</template>

<script lang="ts" setup>
import type { SubTypeNode } from '@/api/types'

interface Props {
  data: SubTypeNode[]
}
withDefaults(defineProps<Props>(), {
  data: () => []
})
</script>

<style lang="less">
.category-content {
  // padding: 8px;
}
</style>