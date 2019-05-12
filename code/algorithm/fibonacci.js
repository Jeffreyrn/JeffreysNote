function Fibonacci(n) {
  if (n <= 1) { return 1 };

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// 使用尾递归，就不会发生栈溢出（或者层层递归造成的超时），相对节省内存
// http://es6.ruanyifeng.com/#docs/function#尾调用优化
function tailFibonacci(n, a = 1, b = 1) {
  if (n < 0) {
    return b
  }
  return tailFibonacci(n - 1, b, a + b)
}
function fibonacci(n) {
  if (n < 2) return n
  else return tfibonacci(n - 3)
}
console.log(fibonacci(3))

// 蹦床函数
function trampoline(f) {
  while (f && f instanceof Function) {
    f = f();
  }
  return f;
}