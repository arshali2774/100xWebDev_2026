const input = { A: [80, 90], B: [70, 75, 85] }


const avgObj = Object.fromEntries(Object.entries(input).map(([key, value]) => {
  let avg = value.reduce((a, b) => a + b, 0) / value.length;
  return [key, avg]
})
)

console.log(avgObj)

console.log(Object.entries(avgObj))

const output = Object.entries(avgObj).reduce((a, b) => {
  return b[1] > a[1] ? b : a
})[0]
console.log(output)

// better apporach

let bestKey = null;
let bestAvg = -Infinity;

for (const [key, arr] of Object.entries(input)) {
  const avg = arr.reduce((s, n) => s + n, 0) / arr.length;
  if (avg > bestAvg) {
    bestAvg = avg;
    bestKey = key;
  }
}
console.log(bestKey)

// using sorting  

const output2 = Object.entries(avgObj).sort((a, b) => b[1] - a[1])[0][0];
console.log(output2)
