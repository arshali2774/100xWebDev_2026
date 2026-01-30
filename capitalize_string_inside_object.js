const input = { name: "alice", city: "delhi" }
const output = {};
for (const key in input) {
  const v = input[key]
  output[key] = v[0].toUpperCase() + v.slice(1)
}
console.log(output)
