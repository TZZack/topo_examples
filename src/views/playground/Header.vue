<template>
  <div class="flex justify-between p-2">
    <div class="flex items-center">
      <SvgIcon
        name="arrow-left"
        class="cursor-pointer mr-8px w-40px"
        title="返回案例列表页面"
        @click="backToCase"
      />
      <span class="text-base">Graph Playground</span>
    </div>
    <IxSpace
      size="sm"
      class="items-center"
    >
      <IxButton
        size="sm"
        @click="downloadProject(store)"
      >
        Download
      </IxButton>
      <IxButton
        size="sm"
        @click="onShareClick"
      >
        Share
      </IxButton>
      <IxButton
        size="sm"
        mode="link"
        href="https://github.com/IDuxFE/idux-playground"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </IxButton>
    </IxSpace>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from '@idux/components/message'
import { useRouter } from 'vue-router'

import { downloadProject } from '@/utils'
import type { ReplStore } from '@/repl-store'

defineProps<{
  store: ReplStore
}>()

const { success, warning } = useMessage()
const onShareClick = async () => {
  if (!navigator.clipboard) {
    warning('navigator.clipboard is undefined')
    return
  }
  await navigator.clipboard.writeText(location.href)
  success('已复制链接到剪切板，直接分享链接即可.')
}

const router = useRouter()
const backToCase = () => {
  router.push({
    name: 'case'
  })
}
</script>

<style>

</style>
