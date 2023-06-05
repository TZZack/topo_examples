// 样式
import '@/style/index.less'

import { createApp } from 'vue'
import '@tzzack/vue-repl/style.css'
import 'uno.css'
import '@idux/components/default.css'

import {
  IDUX_ICON_DEPENDENCIES,
  addIconDefinitions,
} from '@idux/components/icon'
import { createGlobalConfig } from '@idux/components/config'

import svgIcon from '@/components/SvgIcon.vue'
import 'virtual:svg-icons-register'

// 如果不需要 reset 全局样式和滚动条样式，移除下面 2 行代码
import '@idux/components/style/core/reset.default.css'
import '@idux/components/style/core/reset-scroll.default.css'

// 静态加载: `IDUX_ICON_DEPENDENCIES` 是 `@idux` 的部分组件默认所使用到图标，建议在此时静态引入。
addIconDefinitions(IDUX_ICON_DEPENDENCIES)

// 动态加载：不会被打包，可以减小包体积，需要加载的时候时候 http 请求加载
// 注意：请确认图标的 svg 资源依旧被正确放入到 `public/idux-icons` 目录中
const loadIconDynamically = (iconName: any) => {
  return fetch(`/idux-icons/${iconName}.svg`).then((res) => res.text())
}

const globalConfig = createGlobalConfig({
  icon: { loadIconDynamically },
})

import App from './App.vue'
import router from './router/index'

// window.VUE_DEVTOOLS_CONFIG = {
//   defaultSelectedAppId: 'repl',
// }

createApp(App)
  .use(globalConfig)
  .use(router)
  .component('svg-icon', svgIcon)
  .mount('#app')
