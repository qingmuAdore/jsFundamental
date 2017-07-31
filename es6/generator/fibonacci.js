/*
for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法

Generator 函数和for...of循环，实现斐波那契数列的例子
*/

function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}