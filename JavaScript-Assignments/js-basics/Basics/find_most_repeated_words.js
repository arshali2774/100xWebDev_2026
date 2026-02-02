const input = {
  fruits: ["apple", "apple", "banana"],
  drinks: ["apple", "tea"],
};

// Step 1: Flatten all arrays into one → ["apple","apple","banana","apple","tea"]
// Step 2: Count occurrences
const obj = Object.values(input)
  .flat()
  .reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

console.log(obj);

// Find the word with highest count
const mostRepeated = Object.entries(obj).reduce((max, [word, count]) =>
  count > max[1] ? [word, count] : max
)[0];

console.log(mostRepeated); // "apple"

