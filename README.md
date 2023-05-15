# 拓扑案例库

基于`@vue/repl`实现，内嵌了idux组件库（这里取个巧，直接使用idux的[iDux Playground](https://playground.idux.site/)）

## 技术栈
- `@vue/repl`
- `rollup`：使用rollup把相关依赖打包成`esm`模块代码（比如antv/g6这种非`esm`的依赖），因为`@vue/repl`只支持`esm`

## 快速开始

```bash
pnpm i

# 使用rollup导出esm依赖包
pnpm build:dep

pnpm dev
```

## 感谢
- [iDux Playground](https://playground.idux.site/)
- [vue-sfc-playground](https://sfc.vuejs.org/)
- [element-plus-playground](//github.com/element-plus/element-plus-playground)
