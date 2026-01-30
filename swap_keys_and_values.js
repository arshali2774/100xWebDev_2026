const input = {
  a: "x",
  b: "y",
  c: "z"
}

const output = Object.fromEntries(
  Object.entries(input).map(([key,value])=>[
    value,
    key
  ])
)

console.log(output)
