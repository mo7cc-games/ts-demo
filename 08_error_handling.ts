// 08_error_handling.ts
// 说明：同步与异步错误处理（try/catch/finally、Promise.catch、throw 自定义 Error）

function mayThrow(flag: boolean) {
  if (flag) {
    throw new Error('明示错误');
  }
  return 'ok';
}

try {
  console.log('try result', mayThrow(false));
  // mayThrow(true);
} catch (e) {
  console.error('caught', e);
} finally {
  // 清理
}

Promise.resolve('async ok')
  .then((v) => console.log('promise:', v))
  .catch((e) => console.error(e));
