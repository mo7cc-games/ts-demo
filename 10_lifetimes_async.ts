// 10_lifetimes_async.ts
// 说明：TypeScript 没有像 Rust 那样的生命周期标注，但我们可以讨论闭包/作用域与异步资源管理的相似点

function outer() {
  const captured = 'i am captured';
  return function inner() {
    console.log(captured);
  };
}

const fn = outer();
fn();

// 异步资源：示例使用 setTimeout-clear 模式
let id: ReturnType<typeof setTimeout> | null = null;
function startTimer() {
  id = setTimeout(() => console.log('tick'), 1000);
}
function stopTimer() {
  if (id) {
    clearTimeout(id);
  }
}

startTimer();
setTimeout(stopTimer, 1100);
