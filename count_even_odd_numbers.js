const input = [1, 2, 3, 4, 5, 6]

const output = input.reduce((a, b) => {
  if (b % 2 === 0) a["even"] = a["even"] + 1;
  else a["odd"] = a["odd"] + 1;
  return a
}, { even: 0, odd: 0 })

console.log(output)
