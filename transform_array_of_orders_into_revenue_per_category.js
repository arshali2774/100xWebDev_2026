const input = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 },
];

const output = input.reduce((acc, order) => {
  if (acc[order.category]) {
    acc[order.category] += order.price;
  } else {
    acc[order.category] = order.price;
  }
  return acc;
}, {});

console.log(output);
