const input = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

let id = 1;

const output = input.reduce((a, b) => {
  a[id] = b;
  id++;
  return a;
}, {});

console.log(output);
