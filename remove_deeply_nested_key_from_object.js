const input = { a: { b: { c: 1, d: 2 } } };
const remove = "c";

function removeKey(obj, keyToRemove) {
  if (obj.hasOwnProperty(keyToRemove)) {
    delete obj[keyToRemove];
  }

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      removeKey(obj[key], keyToRemove);
    }
  }
  return obj;
}

removeKey(input, remove);

console.log(input);
