// 01_variables.ts
// 说明：变量与数据类型的基础用法（let, const, 基本类型推断）
// 可在 bun 中使用 `bun run <file>` 直接执行 TypeScript 文件（bun 会自动处理 ts）

// number
const x = 42;
console.log('x:', x);

// string
const userName = '墨七';
console.log('userName:', userName);

// boolean
const ok: boolean = true;
console.log('ok:', ok);

// any（尽量避免）
let anything: number | string = 123;
anything = 'now a string';
console.log('anything:', anything);

// 类型注解
const width: number = 3.14;
console.log('width:', width);
