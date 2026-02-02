const input = { a: 10, b: 50, c: 30, d: 40 };
const N = 2;

const topKeys = Object.entries(input)
  .sort((a, b) => b[1] - a[1]) // Sort by value descending
  .slice(0, N) // Take first N entries
  .map(([key]) => key); // Extract just the keys

console.log(topKeys); // ["b", "d"]
