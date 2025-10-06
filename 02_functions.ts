// 02_functions.ts
// 说明：函数定义、可选/默认参数、剩余参数、箭头函数、重载示例

function add2(a: number, b: number): number {
  return a + b;
}

console.log('add(1,2)=', add2(1, 2));

function greet(name: string = '朋友') {
  console.log(`你好，${name}`);
}

greet();
greet('墨七');

// 可选参数
function say(msg: string, times?: number) {
  const t = times ?? 1;
  for (let i = 0; i < t; i++) {
    console.log(msg);
  }
}

say('一次');

// 箭头函数
const square = (n: number) => n * n;
console.log('square(4)=', square(4));
