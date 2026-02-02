const input = { a: 1, b: 2, c: 3, d: 4 };
const size = 2;

const output = Object.entries(input)
  .reduce((acc, entry) => {
    const lastChunk = acc[acc.length - 1];
    // If no chunks yet OR last chunk is full, create a new chunk
    if (!lastChunk || lastChunk.length === size) {
      acc.push([entry]);
    } else {
      lastChunk.push(entry);
    }
    return acc; // Must return accumulator!
  }, [])
  .map((chunk) => Object.fromEntries(chunk)); // Convert each chunk back to object

console.log(output);

const output2 = Object.entries(input).reduce((a, b) => {
  const lastChunk = a[a.length - 1];
  if (!lastChunk || lastChunk.length === size) {
    a.push([b]);
  } else {
    lastChunk.push(b);
  }
  return a;
}, []);

console.log(output2);

const entries = Object.entries(input);
const output3 = [];

for (let i = 0; i < entries.length; i += size) {
  const chunk = entries.slice(i, i + size);
  console.log(chunk);
  output3.push(Object.fromEntries(chunk));
}

console.log(output3);
