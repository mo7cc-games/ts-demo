// 07_modules_packages.ts
// 说明：ES 模块导入导出（export/import）、默认导出、相对与绝对导入、package.json 的 type 字段

// 当前文件演示内联导入导出示例
export function exportedFn() {
  return 'exported';
}

// 在另一个文件中你可以使用：
// import { exportedFn } from './07_modules_packages';

console.log('modules demo', exportedFn());
