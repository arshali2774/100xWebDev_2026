const input = {
  a: 10,
  b: 50,
  c: 20
}

let max = -Infinity;
Object.values(input).forEach(ele => {
  if (ele > max) {
    max = ele;
  }
})

console.log(max)

// best way to do this is this in one line

const max2 = Math.max(...Object.values(input));
console.log(max2)

// without spread

const max3 = Object.values(input).reduce((a, b) => Math.max(a, b))
console.log(max3)


