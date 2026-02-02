const input = { a: 20, b: 60, c: 40, d: 90 }

const output = Object.fromEntries(
  Object.entries(input).filter(([_, value]) => value > 50)
)

console.log(output)

// simple approach.

const output2 = {};

for (const [key, value] of Object.entries(input)) {
  if (value > 50) output2[key] = value;
}
console.log("Hello World")
console.log(output2)
