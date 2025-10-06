// 04_ownership_structs.ts
// 说明：这里借鉴 Rust 的所有权/借用概念来讲解，但在 TypeScript/JavaScript 中没有所有权模型，
// 我们用示例和注释来比较二者差异，展示如何在 TS 中管理对象引用与不可变性

// 在 Rust 中：let s = String::from("hello"); // s 的所有权
// 在 TS 中：引用赋值
const s1 = { text: 'hello' };
const s2 = s1; // s2 与 s1 指向同一对象（无所有权转移）

console.log('s1.text before:', s1.text);
s2.text = 'changed';
console.log('s1.text after:', s1.text);

// 不可变性：使用 Object.freeze
const frozen = Object.freeze({ v: 1 });
// frozen.v = 2; // 在严格模式下会失败
console.log('frozen.v =', frozen.v);

// 推荐：使用不可变数据结构库（如 immer）或复制来避免共享可变状态
const copy = { ...s1 };
copy.text = 'copy changed';
console.log('s1.text final:', s1.text, 'copy.text:', copy.text);
