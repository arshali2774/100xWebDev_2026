const input = ["apple", "banana", "apple", "orange", "banana", "apple"]

const output = {};

input.forEach(element => {
  let n = output[element] || 0
  output[element] = ++n;
});

console.log(output)

// better approach, we use reduce on array to an object. the initial value is an empty object
// on each item we take acc object add a key and its value.
// its value is calculated by first seeing if the acc object has a value if not we start with 0.
// We add 1 to final value to increase the count.

const output2 = input.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
