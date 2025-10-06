// 03_control_flow.ts
// 说明：条件语句、switch、循环（for、while、for...of）、可空合并与可选链

const n: number = 5;
if (n > 0) {
  console.log('正数');
} else if (n < 0) {
  console.log('负数');
} else {
  console.log('零');
}

switch (n) {
  case 0:
    console.log('zero');
    break;
  case 5:
    console.log('five');
    break;
  default:
    console.log('other');
}

const arr = [1, 2, 3];
for (const v of arr) {
  console.log('v=', v);
}

let i = 0;
while (i < 3) {
  console.log('i=', i);
  i++;
}

// 可选链与空合并
const maybe = { a: { b: 2 } } as const;
console.log('maybe.a?.b =', maybe.a?.b ?? 'no');
