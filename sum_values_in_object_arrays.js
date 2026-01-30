const input = {
  food: [10,20,30],
  travel: [5,15],
  bills: [40,60]
}

Object.keys(input).forEach(key=>{
  console.log(key + ": " + input[key])
})

Object.values(input).forEach(value=>{
  console.log(value)
})

let output={};

console.log(Object.entries(input))

for(let [key,value] of Object.entries(input)){
  let sum = value.reduce((acc,curr)=>acc+curr,0)
  output[key] = sum;
}

console.log(output)

// better solution
// making an object from array. since Object.entries gives an array of array something like this.
// [
//   [ 'food', [ 10, 20, 30 ] ],
//   [ 'travel', [ 5, 15 ] ],
//   [ 'bills', [ 40, 60 ] ]
// ]
// so we first get this array map over it using a tuple and sum the values and return this arrat to
// fromEntries and it takes this array and create the object.

const output2 = Object.fromEntries(
  Object.entries(input).map(([key,value])=>[
    key,
    value.reduce((a,b)=>a+b,0)
  ])
)
console.log(output2);
