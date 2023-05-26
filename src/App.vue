<template>
  <IxMessageProvider>
    <router-view v-slot="{ Component }">
      <component
        :is="Component"
        :key="$route.fullPath"
      />
    </router-view>
  </IxMessageProvider>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="less">

.topo-playground {
  
}
</style>
