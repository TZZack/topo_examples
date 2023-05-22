<template>
  <div ref="container"></div>
</template>

<script setup lang="ts">
import {Graph} from '@antv/g6'
import {ref, onMounted} from 'vue'
import { data } from './node/const.ts'

const container = ref(null)
onMounted(() => {
  if (!container.value) {
    return
  }
  const graph = new Graph({
    container: container.value as HTMLElement,
    width: 600,
    height: 600,
    fitCenter: true,
    modes: {
      default: ['drag-canvas', 'drag-node'],
    },
    defaultNode: {
      type: 'circle',
      size: [60],
      labelCfg: {
        position: 'bottom',
      },
      linkPoints: {
        top: true,
        right: true,
        bottom: true,
        left: true,
      },
      icon: {
        show: true,
      },
    },
  });

  graph.data(data);
  graph.render();

  graph.on('node:mouseenter', (evt) => {
    const { item } = evt;
    item && graph.setItemState(item, 'active', true);
  });

  graph.on('node:mouseleave', (evt) => {
    const { item } = evt;
    item && graph.setItemState(item, 'active', false);
  });

  graph.on('node:click', (evt) => {
    const { item } = evt;
    item && graph.setItemState(item, 'selected', true);
  });
  graph.on('canvas:click', (evt) => {
    graph.getNodes().forEach((node) => {
      graph.clearItemStates(node);
    });
  });
})

</script>
