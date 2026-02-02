const input = { a: [1, [2, [3]]], b: [4, [5]] };

const output = Object.fromEntries(
  Object.entries(input).map(([key, value]) => [key, value.flat(Infinity)])
);

console.log(output);
