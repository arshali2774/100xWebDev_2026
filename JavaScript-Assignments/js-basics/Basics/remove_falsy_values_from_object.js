const input = { a: 0, b: null, c: "hello", d: undefined, e: 5 };

const output = Object.fromEntries(
  Object.entries(input).filter(([key, value]) => value),
);

console.log(output);
