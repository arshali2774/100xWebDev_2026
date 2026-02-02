const input = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] }

const output = [];

Object.values(input).forEach(value => {
  value.forEach(item => {
    let isValueInOutput = output.includes(item);
    if (!isValueInOutput) {
      output.push(item)
    }
  })
})

console.log(output)

// better way to do this 

const output2 = [...new Set(Object.values(input).flat())]
console.log(output2)

// reduce way 

const output3 = Object.values(input).reduce((a, b) => b.concat(a), []).filter((v, i, a) => a.indexOf(v) === i)
console.log(output3)

