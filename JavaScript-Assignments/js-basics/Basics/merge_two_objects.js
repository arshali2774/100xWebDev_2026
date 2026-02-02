const input1 = { a: 10, b: 20 };
const input2 = { a: 5, c: 15 };

// no sum override second

const result = { ...input1 };

for (const key in input2) {
  result[key] = input2[key];
}

console.log(result);

// easier way
const output = { ...input1, ...input2 };

console.log(output);
