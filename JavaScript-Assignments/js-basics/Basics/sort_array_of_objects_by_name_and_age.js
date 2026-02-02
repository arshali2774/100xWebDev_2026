const input = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 },
];
// sort first by name and then by age
const output = input.sort((a, b) => {
  // First compare by name (strings use localeCompare)
  const nameCompare = a.name.localeCompare(b.name);

  // If names are equal, compare by age
  if (nameCompare === 0) {
    return a.age - b.age;
  }

  return nameCompare;
});

console.log(output);
