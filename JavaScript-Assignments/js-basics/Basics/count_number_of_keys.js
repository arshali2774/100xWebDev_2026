const input = { a: 1, b: 2, c: 3 }

let count = 0;

Object.keys(input).forEach(item => {
  count++;
})

console.log(count)

const count2 = Object.keys(input).length;

console.log(count2)
