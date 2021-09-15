## 项目概览
本项目核心技术栈为[vue3](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8%A7%88) + Typescript + [Vite](https://cn.vitejs.dev/guide/)

并且集成了以下功能：
- 路由：[Vue Router 4](https://next.router.vuejs.org/)
- 状态管理：[Vue Store 4](https://next.vuex.vuejs.org/)
- CSS预编译：SCSS
- UI 框架：Element Plus
- 环境区分：[dotenv](https://github.com/motdotla/dotenv)
- HTTP 工具：Axios
- Mock 工具：Mockjs + [vite-plugin-mock](https://www.npmjs.com/package/vite-plugin-mock)
- Git Hook 工具：husky + lint-staged
- 代码规范：Prettier + ESLint
- 提交规范：[Commitizen](https://github.com/commitizen/cz-cli)
## 命令
- 本地开发
```
npm run dev
```
- build 生成
```
npm run build
```
- build stage
```
npm run build:stage
```

此外，在`src/`目录下包含了store、请求接口、mock、composition api的使用例子。
## 参考文档
- 想了解vite都有哪些特性和基本使用: [Vite特性总结](https://juejin.cn/post/7007705977294159908)
- 关于ESLint/Prettier以及husky + lint-staged: [ESLint + Prettier提高代码质量（一）：基本概念](https://juejin.cn/post/7006598853684592677)
