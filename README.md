# Typed & Bundled Surge

使用 TypeScript 编写 Surge 脚本，并使用 esbuild 打包。

- 使用 TypeScript 或 JavaScript
- 可以 import 其他文件，甚至 npm 包
- 多个脚本共用同一仓库

## 使用

### TypeScript 支持

Surge 的 API 类型定义在 [surge.d.ts](./surge.d.ts)，目前可能还有错漏，也没有加文档注释。

当然，如果不像使用 TypeScript，也可以直接使用 JavaScript。

### 打包

默认情况下，`packages` 文件夹下的每个文件夹都是一个独立的脚本，源代码应在 `packages/<scriptName>/src` 下，入口为 `index.ts` 或者 `index.js`。

`npm run build` 会将每个脚本打包到 `packages/<scriptName>/<scriptName>.js` 中。

如果对默认行为不满意，可以修改 `build.mjs`。

`packages/<scriptName>` 中的其他文件不会被修改，可以用来放 `README` 或者 `.sgmodule` 这类文件。