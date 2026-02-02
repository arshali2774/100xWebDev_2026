const input = { a: "apple", b: "banana", c: "kiwi" };
let itemName,
  itemLength = 0;
Object.values(input).forEach((item) => {
  if (item.length > itemLength) {
    itemName = item;
    itemLength = item.length;
  }
});

console.log(itemName);

const output = Object.values(input).reduce((a, b) =>
  b.length > a.length ? b : a,
);
console.log(output);
