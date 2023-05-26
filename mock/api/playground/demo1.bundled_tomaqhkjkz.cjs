"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// mock/api/playground/demo1.js
var demo1_exports = {};
__export(demo1_exports, {
  default: () => demo1_default
});
module.exports = __toCommonJS(demo1_exports);
var demo1_default = [
  {
    url: "/playground/demo1",
    method: "get",
    response: () => {
      return {
        success: true,
        data: {
          fileList: [{
            label: "src",
            key: "0",
            fileType: "fold",
            path: "",
            fileName: "",
            fileCode: "",
            parent: null
          }, {
            label: "index.vue",
            key: "0-1",
            fileType: "vue",
            path: "index.vue",
            fileName: "index.vue",
            fileCode: `<template>
  <div
    ref="container"
    style="width: 100%; height: calc(100vh - 16px);"
  />
</template>

<script lang="ts" setup>
import { Cell, Graph } from '@antv/x6'
import {createGraph} from './graph/index.ts'
import {graphData} from './data.ts'
import {onMounted, ref} from 'vue'

let graph = {} as Graph
const container = ref(null)

onMounted(() => {
  if (!container.value) {
    return 
  }
  graph = createGraph({
    graphContainer: container.value as HTMLElement
  })

  const cells: Cell[] = []
  graphData.forEach((item: any) => {
    if (item.shape === 'edge') {
      cells.push(graph.createEdge(item))
    } else {
      cells.push(graph.createNode(item))
    }
  })
  graph.resetCells(cells)
  graph.zoomToFit({ padding: 10, maxScale: 1 })
})
</script>
`,
            parent: "0"
          }, {
            label: "const.ts",
            key: "0-2",
            fileType: "ts",
            path: "const.ts",
            fileName: "const.ts",
            fileCode: `export const LINE_HEIGHT = 24
export const NODE_WIDTH = 150`,
            parent: "0"
          }, {
            label: "data.ts",
            key: "0-3",
            fileType: "ts",
            path: "data.ts",
            fileName: "data.ts",
            fileCode: `export const graphData = [
  {
    'id': '1',
    'shape': 'er-rect',
    'label': '\u5B66\u751F',
    'width': 150,
    'height': 24,
    'position': {
      'x': 24,
      'y': 150
    },
    'ports': [
      {
        'id': '1-1',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'ID'
          },
          'portTypeLabel': {
            'text': 'STRING'
          }
        }
      },
      {
        'id': '1-2',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'Name'
          },
          'portTypeLabel': {
            'text': 'STRING'
          }
        }
      },
      {
        'id': '1-3',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'Class'
          },
          'portTypeLabel': {
            'text': 'NUMBER'
          }
        }
      },
      {
        'id': '1-4',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'Gender'
          },
          'portTypeLabel': {
            'text': 'BOOLEAN'
          }
        }
      }
    ]
  },
  {
    'id': '2',
    'shape': 'er-rect',
    'label': '\u8BFE\u7A0B',
    'width': 150,
    'height': 24,
    'position': {
      'x': 250,
      'y': 210
    },
    'ports': [
      {
        'id': '2-1',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'ID'
          },
          'portTypeLabel': {
            'text': 'STRING'
          }
        }
      },
      {
        'id': '2-2',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'Name'
          },
          'portTypeLabel': {
            'text': 'STRING'
          }
        }
      },
      {
        'id': '2-3',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'StudentID'
          },
          'portTypeLabel': {
            'text': 'STRING'
          }
        }
      },
      {
        'id': '2-4',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'TeacherID'
          },
          'portTypeLabel': {
            'text': 'STRING'
          }
        }
      },
      {
        'id': '2-5',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'Description'
          },
          'portTypeLabel': {
            'text': 'STRING'
          }
        }
      }
    ]
  },
  {
    'id': '3',
    'shape': 'er-rect',
    'label': '\u8001\u5E08',
    'width': 150,
    'height': 24,
    'position': {
      'x': 480,
      'y': 350
    },
    'ports': [
      {
        'id': '3-1',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'ID'
          },
          'portTypeLabel': {
            'text': 'STRING'
          }
        }
      },
      {
        'id': '3-2',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'Name'
          },
          'portTypeLabel': {
            'text': 'STRING'
          }
        }
      },
      {
        'id': '3-3',
        'group': 'list',
        'attrs': {
          'portNameLabel': {
            'text': 'Age'
          },
          'portTypeLabel': {
            'text': 'NUMBER'
          }
        }
      }
    ]
  },
  {
    'id': '4',
    'shape': 'edge',
    'source': {
      'cell': '1',
      'port': '1-1'
    },
    'target': {
      'cell': '2',
      'port': '2-3'
    },
    'attrs': {
      'line': {
        'stroke': '#A2B1C3',
        'strokeWidth': 2
      }
    },
    'zIndex': 0
  },
  {
    'id': '5',
    'shape': 'edge',
    'source': {
      'cell': '3',
      'port': '3-1'
    },
    'target': {
      'cell': '2',
      'port': '2-4'
    },
    'attrs': {
      'line': {
        'stroke': '#A2B1C3',
        'strokeWidth': 2
      }
    },
    'zIndex': 0
  }
]`,
            parent: "0"
          }, {
            label: "graph",
            key: "0-4",
            fileType: "fold",
            path: "",
            fileName: "",
            fileCode: "",
            parent: "0"
          }, {
            label: "index.ts",
            key: "0-5",
            fileType: "ts",
            path: "graph/index.ts",
            fileName: "index.ts",
            fileCode: `import { merge } from 'lodash-es'

import { Graph, Shape } from '@antv/x6'
import { Options } from '@antv/x6/lib/graph/options'
import {register} from './register/index.ts'
const defaultOptions = {
  connecting: {
    router: {
      name: 'er',
      args: {
        offset: 25,
        direction: 'H',
      },
    },
    createEdge() {
      return new Shape.Edge({
        attrs: {
          line: {
            stroke: '#A2B1C3',
            strokeWidth: 2,
          },
        },
      })
    },
  },
} as Partial<Options.Manual>

interface CreateGraphOptions {
  graphContainer: HTMLElement
}
const createGraph = (options: CreateGraphOptions): Graph => {
  register()
  const graph = new Graph(
    merge(defaultOptions, {
      container: options.graphContainer,
    }) as Partial<Options.Manual>,
  )
  return graph
}

export { createGraph }
`,
            parent: "0-4"
          }, {
            label: "register",
            key: "0-6",
            fileType: "fold",
            path: "",
            fileName: "",
            fileCode: "",
            parent: "0-4"
          }, {
            label: "index.ts",
            key: "0-7",
            fileType: "ts",
            path: "graph/register/index.ts",
            fileName: "index.ts",
            fileCode: `import { registerLayouts } from './layout/index.ts'
import { registerNodes } from './node/index.ts'

export function register() {
  registerNodes()
  registerLayouts()
}`,
            parent: "0-6"
          }, {
            label: "layout",
            key: "0-8",
            fileType: "fold",
            path: "",
            fileName: "",
            fileCode: "",
            parent: "0-6"
          }, {
            label: "index.ts",
            key: "0-9",
            fileType: "ts",
            path: "graph/register/layout/index.ts",
            fileName: "index.ts",
            fileCode: `import {registerPortLayout} from './portLayout.ts'

export function registerLayouts() {
  registerPortLayout()
}`,
            parent: "0-8"
          }, {
            label: "portLayout.ts",
            key: "0-10",
            fileType: "ts",
            path: "graph/register/layout/portLayout.ts",
            fileName: "portLayout.ts",
            fileCode: `import { Graph } from '@antv/x6'
import { LINE_HEIGHT } from '../../../const.ts'

export function registerPortLayout() {
  Graph.registerPortLayout(
    'erPortPosition',
    (portsPositionArgs) => {
      return portsPositionArgs.map((_, index) => {
        return {
          position: {
            x: 0,
            y: (index + 1) * LINE_HEIGHT,
          },
          angle: 0,
        }
      })
    },
    true,
  )
}`,
            parent: "0-8"
          }, {
            label: "node",
            key: "0-11",
            fileType: "fold",
            path: "",
            fileName: "",
            fileCode: "",
            parent: "0-6"
          }, {
            label: "erRect.ts",
            key: "0-12",
            fileType: "ts",
            path: "graph/register/node/erRect.ts",
            fileName: "erRect.ts",
            fileCode: `import { Graph } from '@antv/x6'
import { LINE_HEIGHT, NODE_WIDTH } from '../../../const.ts'

export function registerErRectNode() {
  Graph.registerNode(
    'er-rect',
    {
      inherit: 'rect',
      markup: [
        {
          tagName: 'rect',
          selector: 'body',
        },
        {
          tagName: 'text',
          selector: 'label',
        },
      ],
      attrs: {
        rect: {
          strokeWidth: 1,
          stroke: '#5F95FF',
          fill: '#5F95FF',
        },
        label: {
          fontWeight: 'bold',
          fill: '#ffffff',
          fontSize: 12,
        },
      },
      ports: {
        groups: {
          list: {
            markup: [
              {
                tagName: 'rect',
                selector: 'portBody',
              },
              {
                tagName: 'text',
                selector: 'portNameLabel',
              },
              {
                tagName: 'text',
                selector: 'portTypeLabel',
              },
            ],
            attrs: {
              portBody: {
                width: NODE_WIDTH,
                height: LINE_HEIGHT,
                strokeWidth: 1,
                stroke: '#5F95FF',
                fill: '#EFF4FF',
                magnet: true,
              },
              portNameLabel: {
                ref: 'portBody',
                refX: 6,
                refY: 6,
                fontSize: 10,
              },
              portTypeLabel: {
                ref: 'portBody',
                refX: 95,
                refY: 6,
                fontSize: 10,
              },
            },
            position: 'erPortPosition',
          },
        },
      },
    },
    true,
  )
}`,
            parent: "0-11"
          }, {
            label: "index.ts",
            key: "0-13",
            fileType: "ts",
            path: "graph/register/node/index.ts",
            fileName: "index.ts",
            fileCode: `import { registerErRectNode } from './erRect.ts'

export function registerNodes() {
  registerErRectNode()
}`,
            parent: "0-11"
          }]
        }
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9hcGkvcGxheWdyb3VuZC9kZW1vMS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFxjb2RlXFxcXFphY2tcXFxcdG9wb19leGFtcGxlc1xcXFxtb2NrXFxcXGFwaVxcXFxwbGF5Z3JvdW5kXFxcXGRlbW8xLmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXGNvZGVcXFxcWmFja1xcXFx0b3BvX2V4YW1wbGVzXFxcXG1vY2tcXFxcYXBpXFxcXHBsYXlncm91bmRcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L2NvZGUvWmFjay90b3BvX2V4YW1wbGVzL21vY2svYXBpL3BsYXlncm91bmQvZGVtbzEuanNcIjtleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgdXJsOiAnL3BsYXlncm91bmQvZGVtbzEnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XHJcbiAgICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZpbGVMaXN0OiBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdzcmMnLFxyXG4gICAgICAgICAga2V5OiAnMCcsXHJcbiAgICAgICAgICBmaWxlVHlwZTogJ2ZvbGQnLFxyXG4gICAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgICBmaWxlTmFtZTogJycsXHJcbiAgICAgICAgICBmaWxlQ29kZTogJycsXHJcbiAgICAgICAgICBwYXJlbnQ6IG51bGxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBsYWJlbDogJ2luZGV4LnZ1ZScsXHJcbiAgICAgICAgICBrZXk6ICcwLTEnLFxyXG4gICAgICAgICAgZmlsZVR5cGU6ICd2dWUnLFxyXG4gICAgICAgICAgcGF0aDogJ2luZGV4LnZ1ZScsXHJcbiAgICAgICAgICBmaWxlTmFtZTogJ2luZGV4LnZ1ZScsXHJcbiAgICAgICAgICBmaWxlQ29kZTogYDx0ZW1wbGF0ZT5cXG4gIDxkaXZcXG4gICAgcmVmPVwiY29udGFpbmVyXCJcXG4gICAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTZweCk7XCJcXG4gIC8+XFxuPC90ZW1wbGF0ZT5cXG5cXG5cXHgzQ3NjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cXG5pbXBvcnQgeyBDZWxsLCBHcmFwaCB9IGZyb20gJ0BhbnR2L3g2J1xcbmltcG9ydCB7Y3JlYXRlR3JhcGh9IGZyb20gJy4vZ3JhcGgvaW5kZXgudHMnXFxuaW1wb3J0IHtncmFwaERhdGF9IGZyb20gJy4vZGF0YS50cydcXG5pbXBvcnQge29uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnXFxuXFxubGV0IGdyYXBoID0ge30gYXMgR3JhcGhcXG5jb25zdCBjb250YWluZXIgPSByZWYobnVsbClcXG5cXG5vbk1vdW50ZWQoKCkgPT4ge1xcbiAgaWYgKCFjb250YWluZXIudmFsdWUpIHtcXG4gICAgcmV0dXJuIFxcbiAgfVxcbiAgZ3JhcGggPSBjcmVhdGVHcmFwaCh7XFxuICAgIGdyYXBoQ29udGFpbmVyOiBjb250YWluZXIudmFsdWUgYXMgSFRNTEVsZW1lbnRcXG4gIH0pXFxuXFxuICBjb25zdCBjZWxsczogQ2VsbFtdID0gW11cXG4gIGdyYXBoRGF0YS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcXG4gICAgaWYgKGl0ZW0uc2hhcGUgPT09ICdlZGdlJykge1xcbiAgICAgIGNlbGxzLnB1c2goZ3JhcGguY3JlYXRlRWRnZShpdGVtKSlcXG4gICAgfSBlbHNlIHtcXG4gICAgICBjZWxscy5wdXNoKGdyYXBoLmNyZWF0ZU5vZGUoaXRlbSkpXFxuICAgIH1cXG4gIH0pXFxuICBncmFwaC5yZXNldENlbGxzKGNlbGxzKVxcbiAgZ3JhcGguem9vbVRvRml0KHsgcGFkZGluZzogMTAsIG1heFNjYWxlOiAxIH0pXFxufSlcXG5cXHgzQy9zY3JpcHQ+XFxuYCxcclxuICAgICAgICAgIHBhcmVudDogJzAnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICdjb25zdC50cycsXHJcbiAgICAgICAgICBrZXk6ICcwLTInLFxyXG4gICAgICAgICAgZmlsZVR5cGU6ICd0cycsXHJcbiAgICAgICAgICBwYXRoOiAnY29uc3QudHMnLFxyXG4gICAgICAgICAgZmlsZU5hbWU6ICdjb25zdC50cycsXHJcbiAgICAgICAgICBmaWxlQ29kZTogYGV4cG9ydCBjb25zdCBMSU5FX0hFSUdIVCA9IDI0XFxuZXhwb3J0IGNvbnN0IE5PREVfV0lEVEggPSAxNTBgLFxyXG4gICAgICAgICAgcGFyZW50OiAnMCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBsYWJlbDogJ2RhdGEudHMnLFxyXG4gICAgICAgICAga2V5OiAnMC0zJyxcclxuICAgICAgICAgIGZpbGVUeXBlOiAndHMnLFxyXG4gICAgICAgICAgcGF0aDogJ2RhdGEudHMnLFxyXG4gICAgICAgICAgZmlsZU5hbWU6ICdkYXRhLnRzJyxcclxuICAgICAgICAgIGZpbGVDb2RlOiBgZXhwb3J0IGNvbnN0IGdyYXBoRGF0YSA9IFtcXG4gIHtcXG4gICAgJ2lkJzogJzEnLFxcbiAgICAnc2hhcGUnOiAnZXItcmVjdCcsXFxuICAgICdsYWJlbCc6ICdcdTVCNjZcdTc1MUYnLFxcbiAgICAnd2lkdGgnOiAxNTAsXFxuICAgICdoZWlnaHQnOiAyNCxcXG4gICAgJ3Bvc2l0aW9uJzoge1xcbiAgICAgICd4JzogMjQsXFxuICAgICAgJ3knOiAxNTBcXG4gICAgfSxcXG4gICAgJ3BvcnRzJzogW1xcbiAgICAgIHtcXG4gICAgICAgICdpZCc6ICcxLTEnLFxcbiAgICAgICAgJ2dyb3VwJzogJ2xpc3QnLFxcbiAgICAgICAgJ2F0dHJzJzoge1xcbiAgICAgICAgICAncG9ydE5hbWVMYWJlbCc6IHtcXG4gICAgICAgICAgICAndGV4dCc6ICdJRCdcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgJ3BvcnRUeXBlTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnU1RSSU5HJ1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICB7XFxuICAgICAgICAnaWQnOiAnMS0yJyxcXG4gICAgICAgICdncm91cCc6ICdsaXN0JyxcXG4gICAgICAgICdhdHRycyc6IHtcXG4gICAgICAgICAgJ3BvcnROYW1lTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnTmFtZSdcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgJ3BvcnRUeXBlTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnU1RSSU5HJ1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICB7XFxuICAgICAgICAnaWQnOiAnMS0zJyxcXG4gICAgICAgICdncm91cCc6ICdsaXN0JyxcXG4gICAgICAgICdhdHRycyc6IHtcXG4gICAgICAgICAgJ3BvcnROYW1lTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnQ2xhc3MnXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgICdwb3J0VHlwZUxhYmVsJzoge1xcbiAgICAgICAgICAgICd0ZXh0JzogJ05VTUJFUidcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgICAge1xcbiAgICAgICAgJ2lkJzogJzEtNCcsXFxuICAgICAgICAnZ3JvdXAnOiAnbGlzdCcsXFxuICAgICAgICAnYXR0cnMnOiB7XFxuICAgICAgICAgICdwb3J0TmFtZUxhYmVsJzoge1xcbiAgICAgICAgICAgICd0ZXh0JzogJ0dlbmRlcidcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgJ3BvcnRUeXBlTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnQk9PTEVBTidcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgXVxcbiAgfSxcXG4gIHtcXG4gICAgJ2lkJzogJzInLFxcbiAgICAnc2hhcGUnOiAnZXItcmVjdCcsXFxuICAgICdsYWJlbCc6ICdcdThCRkVcdTdBMEInLFxcbiAgICAnd2lkdGgnOiAxNTAsXFxuICAgICdoZWlnaHQnOiAyNCxcXG4gICAgJ3Bvc2l0aW9uJzoge1xcbiAgICAgICd4JzogMjUwLFxcbiAgICAgICd5JzogMjEwXFxuICAgIH0sXFxuICAgICdwb3J0cyc6IFtcXG4gICAgICB7XFxuICAgICAgICAnaWQnOiAnMi0xJyxcXG4gICAgICAgICdncm91cCc6ICdsaXN0JyxcXG4gICAgICAgICdhdHRycyc6IHtcXG4gICAgICAgICAgJ3BvcnROYW1lTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnSUQnXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgICdwb3J0VHlwZUxhYmVsJzoge1xcbiAgICAgICAgICAgICd0ZXh0JzogJ1NUUklORydcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgICAge1xcbiAgICAgICAgJ2lkJzogJzItMicsXFxuICAgICAgICAnZ3JvdXAnOiAnbGlzdCcsXFxuICAgICAgICAnYXR0cnMnOiB7XFxuICAgICAgICAgICdwb3J0TmFtZUxhYmVsJzoge1xcbiAgICAgICAgICAgICd0ZXh0JzogJ05hbWUnXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgICdwb3J0VHlwZUxhYmVsJzoge1xcbiAgICAgICAgICAgICd0ZXh0JzogJ1NUUklORydcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgICAge1xcbiAgICAgICAgJ2lkJzogJzItMycsXFxuICAgICAgICAnZ3JvdXAnOiAnbGlzdCcsXFxuICAgICAgICAnYXR0cnMnOiB7XFxuICAgICAgICAgICdwb3J0TmFtZUxhYmVsJzoge1xcbiAgICAgICAgICAgICd0ZXh0JzogJ1N0dWRlbnRJRCdcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgJ3BvcnRUeXBlTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnU1RSSU5HJ1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICB7XFxuICAgICAgICAnaWQnOiAnMi00JyxcXG4gICAgICAgICdncm91cCc6ICdsaXN0JyxcXG4gICAgICAgICdhdHRycyc6IHtcXG4gICAgICAgICAgJ3BvcnROYW1lTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnVGVhY2hlcklEJ1xcbiAgICAgICAgICB9LFxcbiAgICAgICAgICAncG9ydFR5cGVMYWJlbCc6IHtcXG4gICAgICAgICAgICAndGV4dCc6ICdTVFJJTkcnXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9LFxcbiAgICAgIHtcXG4gICAgICAgICdpZCc6ICcyLTUnLFxcbiAgICAgICAgJ2dyb3VwJzogJ2xpc3QnLFxcbiAgICAgICAgJ2F0dHJzJzoge1xcbiAgICAgICAgICAncG9ydE5hbWVMYWJlbCc6IHtcXG4gICAgICAgICAgICAndGV4dCc6ICdEZXNjcmlwdGlvbidcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgJ3BvcnRUeXBlTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnU1RSSU5HJ1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICBdXFxuICB9LFxcbiAge1xcbiAgICAnaWQnOiAnMycsXFxuICAgICdzaGFwZSc6ICdlci1yZWN0JyxcXG4gICAgJ2xhYmVsJzogJ1x1ODAwMVx1NUUwOCcsXFxuICAgICd3aWR0aCc6IDE1MCxcXG4gICAgJ2hlaWdodCc6IDI0LFxcbiAgICAncG9zaXRpb24nOiB7XFxuICAgICAgJ3gnOiA0ODAsXFxuICAgICAgJ3knOiAzNTBcXG4gICAgfSxcXG4gICAgJ3BvcnRzJzogW1xcbiAgICAgIHtcXG4gICAgICAgICdpZCc6ICczLTEnLFxcbiAgICAgICAgJ2dyb3VwJzogJ2xpc3QnLFxcbiAgICAgICAgJ2F0dHJzJzoge1xcbiAgICAgICAgICAncG9ydE5hbWVMYWJlbCc6IHtcXG4gICAgICAgICAgICAndGV4dCc6ICdJRCdcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgJ3BvcnRUeXBlTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnU1RSSU5HJ1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICB7XFxuICAgICAgICAnaWQnOiAnMy0yJyxcXG4gICAgICAgICdncm91cCc6ICdsaXN0JyxcXG4gICAgICAgICdhdHRycyc6IHtcXG4gICAgICAgICAgJ3BvcnROYW1lTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnTmFtZSdcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgJ3BvcnRUeXBlTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnU1RSSU5HJ1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICB7XFxuICAgICAgICAnaWQnOiAnMy0zJyxcXG4gICAgICAgICdncm91cCc6ICdsaXN0JyxcXG4gICAgICAgICdhdHRycyc6IHtcXG4gICAgICAgICAgJ3BvcnROYW1lTGFiZWwnOiB7XFxuICAgICAgICAgICAgJ3RleHQnOiAnQWdlJ1xcbiAgICAgICAgICB9LFxcbiAgICAgICAgICAncG9ydFR5cGVMYWJlbCc6IHtcXG4gICAgICAgICAgICAndGV4dCc6ICdOVU1CRVInXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIF1cXG4gIH0sXFxuICB7XFxuICAgICdpZCc6ICc0JyxcXG4gICAgJ3NoYXBlJzogJ2VkZ2UnLFxcbiAgICAnc291cmNlJzoge1xcbiAgICAgICdjZWxsJzogJzEnLFxcbiAgICAgICdwb3J0JzogJzEtMSdcXG4gICAgfSxcXG4gICAgJ3RhcmdldCc6IHtcXG4gICAgICAnY2VsbCc6ICcyJyxcXG4gICAgICAncG9ydCc6ICcyLTMnXFxuICAgIH0sXFxuICAgICdhdHRycyc6IHtcXG4gICAgICAnbGluZSc6IHtcXG4gICAgICAgICdzdHJva2UnOiAnI0EyQjFDMycsXFxuICAgICAgICAnc3Ryb2tlV2lkdGgnOiAyXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICAnekluZGV4JzogMFxcbiAgfSxcXG4gIHtcXG4gICAgJ2lkJzogJzUnLFxcbiAgICAnc2hhcGUnOiAnZWRnZScsXFxuICAgICdzb3VyY2UnOiB7XFxuICAgICAgJ2NlbGwnOiAnMycsXFxuICAgICAgJ3BvcnQnOiAnMy0xJ1xcbiAgICB9LFxcbiAgICAndGFyZ2V0Jzoge1xcbiAgICAgICdjZWxsJzogJzInLFxcbiAgICAgICdwb3J0JzogJzItNCdcXG4gICAgfSxcXG4gICAgJ2F0dHJzJzoge1xcbiAgICAgICdsaW5lJzoge1xcbiAgICAgICAgJ3N0cm9rZSc6ICcjQTJCMUMzJyxcXG4gICAgICAgICdzdHJva2VXaWR0aCc6IDJcXG4gICAgICB9XFxuICAgIH0sXFxuICAgICd6SW5kZXgnOiAwXFxuICB9XFxuXWAsXHJcbiAgICAgICAgICBwYXJlbnQ6ICcwJ1xyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgbGFiZWw6ICdncmFwaCcsXHJcbiAgICAgICAgICBrZXk6ICcwLTQnLFxyXG4gICAgICAgICAgZmlsZVR5cGU6ICdmb2xkJyxcclxuICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgZmlsZU5hbWU6ICcnLFxyXG4gICAgICAgICAgZmlsZUNvZGU6ICcnLFxyXG4gICAgICAgICAgcGFyZW50OiAnMCdcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGxhYmVsOiAnaW5kZXgudHMnLFxyXG4gICAgICAgICAga2V5OiAnMC01JyxcclxuICAgICAgICAgIGZpbGVUeXBlOiAndHMnLFxyXG4gICAgICAgICAgcGF0aDogJ2dyYXBoL2luZGV4LnRzJyxcclxuICAgICAgICAgIGZpbGVOYW1lOiAnaW5kZXgudHMnLFxyXG4gICAgICAgICAgZmlsZUNvZGU6IGBpbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaC1lcydcXG5cXG5pbXBvcnQgeyBHcmFwaCwgU2hhcGUgfSBmcm9tICdAYW50di94NidcXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnQGFudHYveDYvbGliL2dyYXBoL29wdGlvbnMnXFxuaW1wb3J0IHtyZWdpc3Rlcn0gZnJvbSAnLi9yZWdpc3Rlci9pbmRleC50cydcXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcXG4gIGNvbm5lY3Rpbmc6IHtcXG4gICAgcm91dGVyOiB7XFxuICAgICAgbmFtZTogJ2VyJyxcXG4gICAgICBhcmdzOiB7XFxuICAgICAgICBvZmZzZXQ6IDI1LFxcbiAgICAgICAgZGlyZWN0aW9uOiAnSCcsXFxuICAgICAgfSxcXG4gICAgfSxcXG4gICAgY3JlYXRlRWRnZSgpIHtcXG4gICAgICByZXR1cm4gbmV3IFNoYXBlLkVkZ2Uoe1xcbiAgICAgICAgYXR0cnM6IHtcXG4gICAgICAgICAgbGluZToge1xcbiAgICAgICAgICAgIHN0cm9rZTogJyNBMkIxQzMnLFxcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAyLFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICB9KVxcbiAgICB9LFxcbiAgfSxcXG59IGFzIFBhcnRpYWw8T3B0aW9ucy5NYW51YWw+XFxuXFxuaW50ZXJmYWNlIENyZWF0ZUdyYXBoT3B0aW9ucyB7XFxuICBncmFwaENvbnRhaW5lcjogSFRNTEVsZW1lbnRcXG59XFxuY29uc3QgY3JlYXRlR3JhcGggPSAob3B0aW9uczogQ3JlYXRlR3JhcGhPcHRpb25zKTogR3JhcGggPT4ge1xcbiAgcmVnaXN0ZXIoKVxcbiAgY29uc3QgZ3JhcGggPSBuZXcgR3JhcGgoXFxuICAgIG1lcmdlKGRlZmF1bHRPcHRpb25zLCB7XFxuICAgICAgY29udGFpbmVyOiBvcHRpb25zLmdyYXBoQ29udGFpbmVyLFxcbiAgICB9KSBhcyBQYXJ0aWFsPE9wdGlvbnMuTWFudWFsPixcXG4gIClcXG4gIHJldHVybiBncmFwaFxcbn1cXG5cXG5leHBvcnQgeyBjcmVhdGVHcmFwaCB9XFxuYCxcclxuICAgICAgICAgIHBhcmVudDogJzAtNCdcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGxhYmVsOiAncmVnaXN0ZXInLFxyXG4gICAgICAgICAga2V5OiAnMC02JyxcclxuICAgICAgICAgIGZpbGVUeXBlOiAnZm9sZCcsXHJcbiAgICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICAgIGZpbGVOYW1lOiAnJyxcclxuICAgICAgICAgIGZpbGVDb2RlOiAnJyxcclxuICAgICAgICAgIHBhcmVudDogJzAtNCdcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGxhYmVsOiAnaW5kZXgudHMnLFxyXG4gICAgICAgICAga2V5OiAnMC03JyxcclxuICAgICAgICAgIGZpbGVUeXBlOiAndHMnLFxyXG4gICAgICAgICAgcGF0aDogJ2dyYXBoL3JlZ2lzdGVyL2luZGV4LnRzJyxcclxuICAgICAgICAgIGZpbGVOYW1lOiAnaW5kZXgudHMnLFxyXG4gICAgICAgICAgZmlsZUNvZGU6IGBpbXBvcnQgeyByZWdpc3RlckxheW91dHMgfSBmcm9tICcuL2xheW91dC9pbmRleC50cydcXG5pbXBvcnQgeyByZWdpc3Rlck5vZGVzIH0gZnJvbSAnLi9ub2RlL2luZGV4LnRzJ1xcblxcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcigpIHtcXG4gIHJlZ2lzdGVyTm9kZXMoKVxcbiAgcmVnaXN0ZXJMYXlvdXRzKClcXG59YCxcclxuICAgICAgICAgIHBhcmVudDogJzAtNidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBsYWJlbDogJ2xheW91dCcsXHJcbiAgICAgICAgICBrZXk6ICcwLTgnLFxyXG4gICAgICAgICAgZmlsZVR5cGU6ICdmb2xkJyxcclxuICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgZmlsZU5hbWU6ICcnLFxyXG4gICAgICAgICAgZmlsZUNvZGU6ICcnLFxyXG4gICAgICAgICAgcGFyZW50OiAnMC02J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiAnaW5kZXgudHMnLFxyXG4gICAgICAgICAga2V5OiAnMC05JyxcclxuICAgICAgICAgIGZpbGVUeXBlOiAndHMnLFxyXG4gICAgICAgICAgcGF0aDogJ2dyYXBoL3JlZ2lzdGVyL2xheW91dC9pbmRleC50cycsXHJcbiAgICAgICAgICBmaWxlTmFtZTogJ2luZGV4LnRzJyxcclxuICAgICAgICAgIGZpbGVDb2RlOiBgaW1wb3J0IHtyZWdpc3RlclBvcnRMYXlvdXR9IGZyb20gJy4vcG9ydExheW91dC50cydcXG5cXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMYXlvdXRzKCkge1xcbiAgcmVnaXN0ZXJQb3J0TGF5b3V0KClcXG59YCxcclxuICAgICAgICAgIHBhcmVudDogJzAtOCdcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGxhYmVsOiAncG9ydExheW91dC50cycsXHJcbiAgICAgICAgICBrZXk6ICcwLTEwJyxcclxuICAgICAgICAgIGZpbGVUeXBlOiAndHMnLFxyXG4gICAgICAgICAgcGF0aDogJ2dyYXBoL3JlZ2lzdGVyL2xheW91dC9wb3J0TGF5b3V0LnRzJyxcclxuICAgICAgICAgIGZpbGVOYW1lOiAncG9ydExheW91dC50cycsXHJcbiAgICAgICAgICBmaWxlQ29kZTogYGltcG9ydCB7IEdyYXBoIH0gZnJvbSAnQGFudHYveDYnXFxuaW1wb3J0IHsgTElORV9IRUlHSFQgfSBmcm9tICcuLi8uLi8uLi9jb25zdC50cydcXG5cXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJQb3J0TGF5b3V0KCkge1xcbiAgR3JhcGgucmVnaXN0ZXJQb3J0TGF5b3V0KFxcbiAgICAnZXJQb3J0UG9zaXRpb24nLFxcbiAgICAocG9ydHNQb3NpdGlvbkFyZ3MpID0+IHtcXG4gICAgICByZXR1cm4gcG9ydHNQb3NpdGlvbkFyZ3MubWFwKChfLCBpbmRleCkgPT4ge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgcG9zaXRpb246IHtcXG4gICAgICAgICAgICB4OiAwLFxcbiAgICAgICAgICAgIHk6IChpbmRleCArIDEpICogTElORV9IRUlHSFQsXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIGFuZ2xlOiAwLFxcbiAgICAgICAgfVxcbiAgICAgIH0pXFxuICAgIH0sXFxuICAgIHRydWUsXFxuICApXFxufWAsXHJcbiAgICAgICAgICBwYXJlbnQ6ICcwLTgnXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICBsYWJlbDogJ25vZGUnLFxyXG4gICAgICAgICAga2V5OiAnMC0xMScsXHJcbiAgICAgICAgICBmaWxlVHlwZTogJ2ZvbGQnLFxyXG4gICAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgICBmaWxlTmFtZTogJycsXHJcbiAgICAgICAgICBmaWxlQ29kZTogJycsXHJcbiAgICAgICAgICBwYXJlbnQ6ICcwLTYnXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICBsYWJlbDogJ2VyUmVjdC50cycsXHJcbiAgICAgICAgICBrZXk6ICcwLTEyJyxcclxuICAgICAgICAgIGZpbGVUeXBlOiAndHMnLFxyXG4gICAgICAgICAgcGF0aDogJ2dyYXBoL3JlZ2lzdGVyL25vZGUvZXJSZWN0LnRzJyxcclxuICAgICAgICAgIGZpbGVOYW1lOiAnZXJSZWN0LnRzJyxcclxuICAgICAgICAgIGZpbGVDb2RlOiBgaW1wb3J0IHsgR3JhcGggfSBmcm9tICdAYW50di94NidcXG5pbXBvcnQgeyBMSU5FX0hFSUdIVCwgTk9ERV9XSURUSCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0LnRzJ1xcblxcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVyUmVjdE5vZGUoKSB7XFxuICBHcmFwaC5yZWdpc3Rlck5vZGUoXFxuICAgICdlci1yZWN0JyxcXG4gICAge1xcbiAgICAgIGluaGVyaXQ6ICdyZWN0JyxcXG4gICAgICBtYXJrdXA6IFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgdGFnTmFtZTogJ3JlY3QnLFxcbiAgICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgdGFnTmFtZTogJ3RleHQnLFxcbiAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcXG4gICAgICAgIH0sXFxuICAgICAgXSxcXG4gICAgICBhdHRyczoge1xcbiAgICAgICAgcmVjdDoge1xcbiAgICAgICAgICBzdHJva2VXaWR0aDogMSxcXG4gICAgICAgICAgc3Ryb2tlOiAnIzVGOTVGRicsXFxuICAgICAgICAgIGZpbGw6ICcjNUY5NUZGJyxcXG4gICAgICAgIH0sXFxuICAgICAgICBsYWJlbDoge1xcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXFxuICAgICAgICAgIGZpbGw6ICcjZmZmZmZmJyxcXG4gICAgICAgICAgZm9udFNpemU6IDEyLFxcbiAgICAgICAgfSxcXG4gICAgICB9LFxcbiAgICAgIHBvcnRzOiB7XFxuICAgICAgICBncm91cHM6IHtcXG4gICAgICAgICAgbGlzdDoge1xcbiAgICAgICAgICAgIG1hcmt1cDogW1xcbiAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICB0YWdOYW1lOiAncmVjdCcsXFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAncG9ydEJvZHknLFxcbiAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgdGFnTmFtZTogJ3RleHQnLFxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3BvcnROYW1lTGFiZWwnLFxcbiAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgdGFnTmFtZTogJ3RleHQnLFxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3BvcnRUeXBlTGFiZWwnLFxcbiAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIGF0dHJzOiB7XFxuICAgICAgICAgICAgICBwb3J0Qm9keToge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogTk9ERV9XSURUSCxcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBMSU5FX0hFSUdIVCxcXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDEsXFxuICAgICAgICAgICAgICAgIHN0cm9rZTogJyM1Rjk1RkYnLFxcbiAgICAgICAgICAgICAgICBmaWxsOiAnI0VGRjRGRicsXFxuICAgICAgICAgICAgICAgIG1hZ25ldDogdHJ1ZSxcXG4gICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICBwb3J0TmFtZUxhYmVsOiB7XFxuICAgICAgICAgICAgICAgIHJlZjogJ3BvcnRCb2R5JyxcXG4gICAgICAgICAgICAgICAgcmVmWDogNixcXG4gICAgICAgICAgICAgICAgcmVmWTogNixcXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxcbiAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgIHBvcnRUeXBlTGFiZWw6IHtcXG4gICAgICAgICAgICAgICAgcmVmOiAncG9ydEJvZHknLFxcbiAgICAgICAgICAgICAgICByZWZYOiA5NSxcXG4gICAgICAgICAgICAgICAgcmVmWTogNixcXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxcbiAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZXJQb3J0UG9zaXRpb24nLFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICB9LFxcbiAgICB9LFxcbiAgICB0cnVlLFxcbiAgKVxcbn1gLFxyXG4gICAgICAgICAgcGFyZW50OiAnMC0xMSdcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGxhYmVsOiAnaW5kZXgudHMnLFxyXG4gICAgICAgICAga2V5OiAnMC0xMycsXHJcbiAgICAgICAgICBmaWxlVHlwZTogJ3RzJyxcclxuICAgICAgICAgIHBhdGg6ICdncmFwaC9yZWdpc3Rlci9ub2RlL2luZGV4LnRzJyxcclxuICAgICAgICAgIGZpbGVOYW1lOiAnaW5kZXgudHMnLFxyXG4gICAgICAgICAgZmlsZUNvZGU6IGBpbXBvcnQgeyByZWdpc3RlckVyUmVjdE5vZGUgfSBmcm9tICcuL2VyUmVjdC50cydcXG5cXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJOb2RlcygpIHtcXG4gIHJlZ2lzdGVyRXJSZWN0Tm9kZSgpXFxufWAsXHJcbiAgICAgICAgICBwYXJlbnQ6ICcwLTExJ1xyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5dIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBSLElBQU8sZ0JBQVE7QUFBQSxFQUN2UztBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsVUFBVSxNQUFNO0FBQ2YsYUFBTztBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsTUFBTTtBQUFBLFVBQ0osVUFBVSxDQUFDO0FBQUEsWUFDVCxPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxVQUFVO0FBQUEsWUFDVixNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDVixHQUFHO0FBQUEsWUFDRCxPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxVQUFVO0FBQUEsWUFDVixNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDVixHQUFHO0FBQUEsWUFDRCxPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxVQUFVO0FBQUEsWUFDVixNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUE7QUFBQSxZQUNWLFFBQVE7QUFBQSxVQUNWLEdBQUc7QUFBQSxZQUNELE9BQU87QUFBQSxZQUNQLEtBQUs7QUFBQSxZQUNMLFVBQVU7QUFBQSxZQUNWLE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQSxZQUNWLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNWLFFBQVE7QUFBQSxVQUNWLEdBQUU7QUFBQSxZQUNBLE9BQU87QUFBQSxZQUNQLEtBQUs7QUFBQSxZQUNMLFVBQVU7QUFBQSxZQUNWLE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQSxZQUNWLFVBQVU7QUFBQSxZQUNWLFFBQVE7QUFBQSxVQUNWLEdBQUU7QUFBQSxZQUNBLE9BQU87QUFBQSxZQUNQLEtBQUs7QUFBQSxZQUNMLFVBQVU7QUFBQSxZQUNWLE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQSxZQUNWLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDVixHQUFFO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxVQUFVO0FBQUEsWUFDVixNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDVixHQUFFO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxVQUFVO0FBQUEsWUFDVixNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDVixHQUFHO0FBQUEsWUFDRCxPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxVQUFVO0FBQUEsWUFDVixNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDVixHQUFHO0FBQUEsWUFDRCxPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxVQUFVO0FBQUEsWUFDVixNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNWLFFBQVE7QUFBQSxVQUNWLEdBQUU7QUFBQSxZQUNBLE9BQU87QUFBQSxZQUNQLEtBQUs7QUFBQSxZQUNMLFVBQVU7QUFBQSxZQUNWLE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQSxZQUNWLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ1YsUUFBUTtBQUFBLFVBQ1YsR0FBRTtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsS0FBSztBQUFBLFlBQ0wsVUFBVTtBQUFBLFlBQ1YsTUFBTTtBQUFBLFlBQ04sVUFBVTtBQUFBLFlBQ1YsVUFBVTtBQUFBLFlBQ1YsUUFBUTtBQUFBLFVBQ1YsR0FBRTtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsS0FBSztBQUFBLFlBQ0wsVUFBVTtBQUFBLFlBQ1YsTUFBTTtBQUFBLFlBQ04sVUFBVTtBQUFBLFlBQ1YsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDVixRQUFRO0FBQUEsVUFDVixHQUFFO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxVQUFVO0FBQUEsWUFDVixNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNWLFFBQVE7QUFBQSxVQUNWLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
