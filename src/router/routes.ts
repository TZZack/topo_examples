import { type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'case',
    component: () => import('@/views/case-list/Index.vue'), //路由懒加载
  },
  {
    name: 'playground',
    path: '/playground',
    component: () => import('@/views/playground/Index.vue'),
  },
]

export default routes