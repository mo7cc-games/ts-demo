// 11_patterns.ts
// 说明：常见模式：工厂函数、单例、装饰器（TS 实验性）、中间件链、柯里化等

// 工厂函数
function makeCounter(initial = 0) {
  let n = initial;
  return {
    inc() {
      n++;
      return n;
    },
    get() {
      return n;
    },
  };
}

const c = makeCounter(5);
console.log(c.inc(), c.inc(), c.get());

// 简单的柯里化
function add(a: number) {
  return (b: number) => a + b;
}
console.log(add(2)(3));
