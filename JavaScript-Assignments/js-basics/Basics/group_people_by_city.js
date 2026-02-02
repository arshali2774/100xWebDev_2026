const input = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

const output = input.reduce((a, b) => {
  if (!a[b.city]) {
    a[b.city] = [];
  }
  a[b.city].push(b.name);
  return a;
}, {})

console.log(output)

// use plain loop 

const output2 = {};
for (const { name, city } of input) {
  if (!output2[city]) output2[city] = [];
  output2[city].push(name)
}
console.log(output2)

const output3 = {};

input.forEach(({ name, city }) => {
  (output3[city] ||= []).push(name)
})
console.log(output3)

// use builtint js
const output4 = Object.groupBy(input, item => item.city)
for (const city in output4) {
  output4[city] = output4[city].map(p => p.name)
}
console.log(output4)
