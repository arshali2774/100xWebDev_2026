const input1 = { a: { x: 1, y: 2 } };
const input2 = { a: { y: 3, z: 4 } };

// Expected output: { a: { x: 1, y: 3, z: 4 } }

function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (
      typeof obj2[key] === "object" &&
      obj2[key] !== null &&
      typeof result[key] === "object" &&
      result[key] !== null
    ) {
      // Both values are objects, merge recursively
      result[key] = deepMerge(result[key], obj2[key]);
    } else {
      // Otherwise, override with obj2's value
      result[key] = obj2[key];
    }
  }

  return result;
}

const output = deepMerge(input1, input2);
console.log(output);
