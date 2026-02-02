const input = { user: { profile: { name: "Alice", age: 25 } } };

const {
  user: {
    profile: { name, age },
  },
} = input;

console.log(name, age);
