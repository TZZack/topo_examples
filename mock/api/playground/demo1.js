export default [
  {
    url: '/playground/demo1',
    method: 'get',
    response: () => {
     return {
      success: true,
      data: {
        fileList: [{
          label: 'src',
          key: '0',
          fileType: 'fold',
          path: '',
          fileName: '',
          fileCode: '',
          parent: null
        }, {
          label: 'index.vue',
          key: '0-1',
          fileType: 'vue',
          path: 'index.vue',
          fileName: 'index.vue',
          fileCode: `<template>\n  <div\n    ref="container"\n    style="width: 100%; height: calc(100vh - 16px);"\n  />\n</template>\n\n\x3Cscript lang="ts" setup>\nimport { Cell, Graph } from '@antv/x6'\nimport {createGraph} from './graph/index.ts'\nimport {graphData} from './data.ts'\nimport {onMounted, ref} from 'vue'\n\nlet graph = {} as Graph\nconst container = ref(null)\n\nonMounted(() => {\n  if (!container.value) {\n    return \n  }\n  graph = createGraph({\n    graphContainer: container.value as HTMLElement\n  })\n\n  const cells: Cell[] = []\n  graphData.forEach((item: any) => {\n    if (item.shape === 'edge') {\n      cells.push(graph.createEdge(item))\n    } else {\n      cells.push(graph.createNode(item))\n    }\n  })\n  graph.resetCells(cells)\n  graph.zoomToFit({ padding: 10, maxScale: 1 })\n})\n\x3C/script>\n`,
          parent: '0'
        }, {
          label: 'const.ts',
          key: '0-2',
          fileType: 'ts',
          path: 'const.ts',
          fileName: 'const.ts',
          fileCode: `export const LINE_HEIGHT = 24\nexport const NODE_WIDTH = 150`,
          parent: '0'
        }, {
          label: 'data.ts',
          key: '0-3',
          fileType: 'ts',
          path: 'data.ts',
          fileName: 'data.ts',
          fileCode: `export const graphData = [\n  {\n    'id': '1',\n    'shape': 'er-rect',\n    'label': '学生',\n    'width': 150,\n    'height': 24,\n    'position': {\n      'x': 24,\n      'y': 150\n    },\n    'ports': [\n      {\n        'id': '1-1',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'ID'\n          },\n          'portTypeLabel': {\n            'text': 'STRING'\n          }\n        }\n      },\n      {\n        'id': '1-2',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'Name'\n          },\n          'portTypeLabel': {\n            'text': 'STRING'\n          }\n        }\n      },\n      {\n        'id': '1-3',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'Class'\n          },\n          'portTypeLabel': {\n            'text': 'NUMBER'\n          }\n        }\n      },\n      {\n        'id': '1-4',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'Gender'\n          },\n          'portTypeLabel': {\n            'text': 'BOOLEAN'\n          }\n        }\n      }\n    ]\n  },\n  {\n    'id': '2',\n    'shape': 'er-rect',\n    'label': '课程',\n    'width': 150,\n    'height': 24,\n    'position': {\n      'x': 250,\n      'y': 210\n    },\n    'ports': [\n      {\n        'id': '2-1',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'ID'\n          },\n          'portTypeLabel': {\n            'text': 'STRING'\n          }\n        }\n      },\n      {\n        'id': '2-2',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'Name'\n          },\n          'portTypeLabel': {\n            'text': 'STRING'\n          }\n        }\n      },\n      {\n        'id': '2-3',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'StudentID'\n          },\n          'portTypeLabel': {\n            'text': 'STRING'\n          }\n        }\n      },\n      {\n        'id': '2-4',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'TeacherID'\n          },\n          'portTypeLabel': {\n            'text': 'STRING'\n          }\n        }\n      },\n      {\n        'id': '2-5',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'Description'\n          },\n          'portTypeLabel': {\n            'text': 'STRING'\n          }\n        }\n      }\n    ]\n  },\n  {\n    'id': '3',\n    'shape': 'er-rect',\n    'label': '老师',\n    'width': 150,\n    'height': 24,\n    'position': {\n      'x': 480,\n      'y': 350\n    },\n    'ports': [\n      {\n        'id': '3-1',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'ID'\n          },\n          'portTypeLabel': {\n            'text': 'STRING'\n          }\n        }\n      },\n      {\n        'id': '3-2',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'Name'\n          },\n          'portTypeLabel': {\n            'text': 'STRING'\n          }\n        }\n      },\n      {\n        'id': '3-3',\n        'group': 'list',\n        'attrs': {\n          'portNameLabel': {\n            'text': 'Age'\n          },\n          'portTypeLabel': {\n            'text': 'NUMBER'\n          }\n        }\n      }\n    ]\n  },\n  {\n    'id': '4',\n    'shape': 'edge',\n    'source': {\n      'cell': '1',\n      'port': '1-1'\n    },\n    'target': {\n      'cell': '2',\n      'port': '2-3'\n    },\n    'attrs': {\n      'line': {\n        'stroke': '#A2B1C3',\n        'strokeWidth': 2\n      }\n    },\n    'zIndex': 0\n  },\n  {\n    'id': '5',\n    'shape': 'edge',\n    'source': {\n      'cell': '3',\n      'port': '3-1'\n    },\n    'target': {\n      'cell': '2',\n      'port': '2-4'\n    },\n    'attrs': {\n      'line': {\n        'stroke': '#A2B1C3',\n        'strokeWidth': 2\n      }\n    },\n    'zIndex': 0\n  }\n]`,
          parent: '0'
        },{
          label: 'graph',
          key: '0-4',
          fileType: 'fold',
          path: '',
          fileName: '',
          fileCode: '',
          parent: '0'
        },{
          label: 'index.ts',
          key: '0-5',
          fileType: 'ts',
          path: 'graph/index.ts',
          fileName: 'index.ts',
          fileCode: `import { merge } from 'lodash-es'\n\nimport { Graph, Shape } from '@antv/x6'\nimport { Options } from '@antv/x6/lib/graph/options'\nimport {register} from './register/index.ts'\nconst defaultOptions = {\n  connecting: {\n    router: {\n      name: 'er',\n      args: {\n        offset: 25,\n        direction: 'H',\n      },\n    },\n    createEdge() {\n      return new Shape.Edge({\n        attrs: {\n          line: {\n            stroke: '#A2B1C3',\n            strokeWidth: 2,\n          },\n        },\n      })\n    },\n  },\n} as Partial<Options.Manual>\n\ninterface CreateGraphOptions {\n  graphContainer: HTMLElement\n}\nconst createGraph = (options: CreateGraphOptions): Graph => {\n  register()\n  const graph = new Graph(\n    merge(defaultOptions, {\n      container: options.graphContainer,\n    }) as Partial<Options.Manual>,\n  )\n  return graph\n}\n\nexport { createGraph }\n`,
          parent: '0-4'
        },{
          label: 'register',
          key: '0-6',
          fileType: 'fold',
          path: '',
          fileName: '',
          fileCode: '',
          parent: '0-4'
        },{
          label: 'index.ts',
          key: '0-7',
          fileType: 'ts',
          path: 'graph/register/index.ts',
          fileName: 'index.ts',
          fileCode: `import { registerLayouts } from './layout/index.ts'\nimport { registerNodes } from './node/index.ts'\n\nexport function register() {\n  registerNodes()\n  registerLayouts()\n}`,
          parent: '0-6'
        }, {
          label: 'layout',
          key: '0-8',
          fileType: 'fold',
          path: '',
          fileName: '',
          fileCode: '',
          parent: '0-6'
        }, {
          label: 'index.ts',
          key: '0-9',
          fileType: 'ts',
          path: 'graph/register/layout/index.ts',
          fileName: 'index.ts',
          fileCode: `import {registerPortLayout} from './portLayout.ts'\n\nexport function registerLayouts() {\n  registerPortLayout()\n}`,
          parent: '0-8'
        },{
          label: 'portLayout.ts',
          key: '0-10',
          fileType: 'ts',
          path: 'graph/register/layout/portLayout.ts',
          fileName: 'portLayout.ts',
          fileCode: `import { Graph } from '@antv/x6'\nimport { LINE_HEIGHT } from '../../../const.ts'\n\nexport function registerPortLayout() {\n  Graph.registerPortLayout(\n    'erPortPosition',\n    (portsPositionArgs) => {\n      return portsPositionArgs.map((_, index) => {\n        return {\n          position: {\n            x: 0,\n            y: (index + 1) * LINE_HEIGHT,\n          },\n          angle: 0,\n        }\n      })\n    },\n    true,\n  )\n}`,
          parent: '0-8'
        },{
          label: 'node',
          key: '0-11',
          fileType: 'fold',
          path: '',
          fileName: '',
          fileCode: '',
          parent: '0-6'
        },{
          label: 'erRect.ts',
          key: '0-12',
          fileType: 'ts',
          path: 'graph/register/node/erRect.ts',
          fileName: 'erRect.ts',
          fileCode: `import { Graph } from '@antv/x6'\nimport { LINE_HEIGHT, NODE_WIDTH } from '../../../const.ts'\n\nexport function registerErRectNode() {\n  Graph.registerNode(\n    'er-rect',\n    {\n      inherit: 'rect',\n      markup: [\n        {\n          tagName: 'rect',\n          selector: 'body',\n        },\n        {\n          tagName: 'text',\n          selector: 'label',\n        },\n      ],\n      attrs: {\n        rect: {\n          strokeWidth: 1,\n          stroke: '#5F95FF',\n          fill: '#5F95FF',\n        },\n        label: {\n          fontWeight: 'bold',\n          fill: '#ffffff',\n          fontSize: 12,\n        },\n      },\n      ports: {\n        groups: {\n          list: {\n            markup: [\n              {\n                tagName: 'rect',\n                selector: 'portBody',\n              },\n              {\n                tagName: 'text',\n                selector: 'portNameLabel',\n              },\n              {\n                tagName: 'text',\n                selector: 'portTypeLabel',\n              },\n            ],\n            attrs: {\n              portBody: {\n                width: NODE_WIDTH,\n                height: LINE_HEIGHT,\n                strokeWidth: 1,\n                stroke: '#5F95FF',\n                fill: '#EFF4FF',\n                magnet: true,\n              },\n              portNameLabel: {\n                ref: 'portBody',\n                refX: 6,\n                refY: 6,\n                fontSize: 10,\n              },\n              portTypeLabel: {\n                ref: 'portBody',\n                refX: 95,\n                refY: 6,\n                fontSize: 10,\n              },\n            },\n            position: 'erPortPosition',\n          },\n        },\n      },\n    },\n    true,\n  )\n}`,
          parent: '0-11'
        },{
          label: 'index.ts',
          key: '0-13',
          fileType: 'ts',
          path: 'graph/register/node/index.ts',
          fileName: 'index.ts',
          fileCode: `import { registerErRectNode } from './erRect.ts'\n\nexport function registerNodes() {\n  registerErRectNode()\n}`,
          parent: '0-11'
        }]
      }
     }
    }
  }
]