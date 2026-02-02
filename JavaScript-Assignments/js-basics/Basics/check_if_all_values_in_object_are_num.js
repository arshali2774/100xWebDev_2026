const input = { a: 1, b: "hello", c: 3 };

const output = Object.values(input).every((item) => {
  return typeof item == "number";
});

console.log(output);
