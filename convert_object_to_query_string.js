const input = { name: "Alice", age: 25 }

const output = new URLSearchParams(input).toString();

console.log(output)
