const input = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 },
];

const output = input.reduce((a, b) => {
  if (a[b.user]) {
    a[b.user] = a[b.user] + b.amount;
  } else {
    a[b.user] = b.amount;
  }
  return a;
}, {});

console.log(output);
