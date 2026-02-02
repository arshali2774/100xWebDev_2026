const input = { a: [1, 2, 3], b: [2, 3, 4], c: [3, 4, 5] };

const arrays = Object.values(input); // [[1,2,3], [2,3,4], [3,4,5]]

// Take first array, keep only items that exist in ALL other arrays
const intersection = arrays[0].filter((item) =>
  arrays.every((arr) => arr.includes(item)),
);

console.log(intersection); // [3]
