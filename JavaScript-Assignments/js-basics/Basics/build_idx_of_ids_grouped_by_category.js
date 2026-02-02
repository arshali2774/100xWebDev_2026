const input = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" },
];

const output = input.reduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item.id); // Always push (no else needed, no reassignment)
  return acc;
}, {});

console.log(output);
