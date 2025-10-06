// 05_structs_enums.ts
// 说明：在 TS 中使用接口(interface) 和 class 来模拟结构体，枚举（enum）与联合类型来模拟模式匹配

// 定义接口/类（类似 Rust 的结构体）
interface Point {
  x: number;
  y: number;
}

const p: Point = { x: 1, y: 2 };
console.log('point', p);

// class
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}
const person = new Person('墨七', 30);
console.log('person', person);

// 枚举
enum Color {
  Red,
  Green,
  Blue,
}

console.log('Color.Red=', Color.Red);

// 模拟模式匹配：使用 discriminated unions
type Shape = { kind: 'circle'; radius: number } | { kind: 'rect'; width: number; height: number };

function area(s: Shape) {
  if (s.kind === 'circle') {
    return Math.PI * s.radius * s.radius;
  }
  if (s.kind === 'rect') {
    return s.width * s.height;
  }
  // Never 类型保证
  const _exhaustive: never = s;
  return _exhaustive;
}

console.log('area circle', area({ kind: 'circle', radius: 2 }));
