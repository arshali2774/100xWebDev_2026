const input1 = { a: { x: 1, y: 2 } };
const input2 = { a: { x: 1, y: 2 } };

const input3 = { a: { z: 1, y: 2 } };
const input4 = { a: { x: 23, y: 2 } };

// if we do simple comparison we will not get correct answer.
console.log(input1 === input2); //returns false even though they are same.

// Objects are compared by reference (memory address), not by value.

// ```js
// const a = { x: 1 };
// const b = { x: 1 };
// const c = a;

// a === b  // false (different objects in memory)
// a === c  // true (same reference)
// ```

function deepEqual(obj1, obj2) {
  // 1. Same reference or both primitives with same value
  if (obj1 === obj2) return true;

  // 2. If either is null/not-object, they're not equal (already failed === above)
  if (obj1 === null || obj2 === null) return false;
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  // 3. Check if same number of keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  // 4. Recursively check each key's value
  for (const key of keys1) {
    if (!keys2.includes(key)) return false; // Key doesn't exist in obj2
    if (!deepEqual(obj1[key], obj2[key])) return false; // Values don't match
  }

  return true;
}

console.log(deepEqual(input1, input2));
