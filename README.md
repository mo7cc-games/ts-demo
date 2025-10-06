# ts-demo

这是一个 TypeScript 学习 demo，演示在 Bun 环境下的常见语法与用法。

## 示例文件

仓库根目录下包含一组编号的 TypeScript 示例文件，使用 bun 可以直接运行：

- `01_variables.ts` - 变量与基本类型
- `02_functions.ts` - 函数与参数
- `03_control_flow.ts` - 流程控制（if/switch/循环）
- `04_ownership_structs.ts` - 所有权对比与引用/不可变性
- `05_structs_enums.ts` - 接口/类、枚举与模式匹配（联合类型）
- `06_collections.ts` - 数组、元组、Map、Set 与常用操作
- `07_modules_packages.ts` - 模块导入/导出与 package.json 说明
- `08_error_handling.ts` - 错误处理与 Promise 捕获
- `09_generics_traits.ts` - 泛型与 Trait 风格接口
- `10_lifetimes_async.ts` - 生命周期类比与异步资源
- `11_patterns.ts` - 常见设计模式示例
- `12_async_await.ts` - async/await 与并发示例

## 运行示例

在本项目根目录，使用 bun 运行某个示例文件：

```bash
# 运行示例（Bun 会自动处理 TypeScript）
bun run 01_variables.ts
```

如果未安装 bun，请参考：https://bun.sh
