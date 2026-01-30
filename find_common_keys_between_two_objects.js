const input1 = { a: 1, b: 2, c: 3 };
const input2 = { b: 4, c: 5, d: 6 };

const output = Object.keys(input1).filter(key => key in input2);

console.log(output)


