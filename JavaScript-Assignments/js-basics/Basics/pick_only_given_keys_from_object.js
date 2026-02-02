const input = { name: "Rahul", age: 23, city: "Noida" }
const keys = ["name", "city"]

let output = {};

keys.forEach(item => {
  output[item] = input[item];
})

console.log(output)

// using reduce 
const output2 = keys.reduce((acc, key) => {
  acc[key] = input[key];
  return acc;
}, {})

console.log(output2)

const output3 = Object.fromEntries(
  keys.map(k => [k, input[k]])
)

console.log(output3)


