// 12_async_await.ts
// 说明：async/await、并发（Promise.all）、流式 API（ReadableStream）在 bun/Node 中的使用

async function fetchData() {
  // 这里不做真实网络请求，模拟异步操作
  const p = new Promise<string>((res) => setTimeout(() => res('data'), 100));
  return await p;
}

async function main() {
  const d = await fetchData();
  console.log('fetched', d);
  const [a, b] = await Promise.all([fetchData(), fetchData()]);
  console.log('parallel', a, b);
}

main();
