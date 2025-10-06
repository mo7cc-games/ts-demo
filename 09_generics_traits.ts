// 09_generics_traits.ts
// 说明：泛型、接口泛型、以及用接口模拟 Trait（行为抽象）

// 泛型函数
function identity<T>(v: T): T {
  return v;
}

console.log(identity<number>(123));
console.log(identity('hello'));

// 泛型接口
interface Container<T> {
  value: T;
}

const c9: Container<string> = { value: 'abc' };
console.log('container', c9);

// Trait-like：接口定义行为
interface Printable {
  print(): void;
}

class Doc implements Printable {
  constructor(private text: string) {}
  print() {
    console.log(this.text);
  }
}

const d = new Doc('doc content');
d.print();
