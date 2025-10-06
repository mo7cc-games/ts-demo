// 06_collections.ts
// 说明：数组、元组、Map、Set 及常见操作（map/filter/reduce、查找、排序）

const nums = [1, 2, 3, 4, 5];
console.log('nums:', nums);

const doubled = nums.map((n) => n * 2);
console.log('doubled:', doubled);

const filtered = nums.filter((n) => n % 2 === 0);
console.log('filtered:', filtered);

const tup: [number, string] = [1, 'one'];
console.log('tuple:', tup);

const m = new Map<string, number>();
m.set('a', 1);
m.set('b', 2);
console.log('map a=', m.get('a'));

const s = new Set<number>([1, 2, 3]);
console.log('set has 2?', s.has(2));

// reduce
const sum = nums.reduce((acc, v) => acc + v, 0);
console.log('sum=', sum);
