function foo(a, b) {
  a = Number(a);
  b = Number(b);
  return a + b;
}

console.log(foo(1, '1')); // Output: 2 (Correct numerical addition) 