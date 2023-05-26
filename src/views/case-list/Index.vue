<template>
  <IxButton @click="jumpToPlayground">
    jumpToPlayground
  </IxButton>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const jumpToPlayground = () => {
  router.push({
    name: 'playground',
  })
}
</script>