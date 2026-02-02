const expected = ["a", "b", "c"];
const actual = ["b", "c", "d"];

const missing = [];
const extra = [];

for (const item of expected) {
  if (!actual.includes(item)) {
    missing.push(item);
  }
}

for (const item of actual) {
  if (!expected.includes(item)) {
    extra.push(item);
  }
}

console.log(missing);
console.log(extra);

// better approach
const expectedSet = new Set(expected);
const actualSet = new Set(actual);

const missing1 = expected.filter((item) => !actualSet.has(item));
const extra1 = actual.filter((item) => !expectedSet.has(item));

console.log(missing1, extra1);
