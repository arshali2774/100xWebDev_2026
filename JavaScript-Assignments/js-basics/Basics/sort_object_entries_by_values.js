const input = { a: 3, b: 1, c: 2 }

const output = Object.entries(input).sort((a, b) => a[1] - b[1])

console.log(output);
