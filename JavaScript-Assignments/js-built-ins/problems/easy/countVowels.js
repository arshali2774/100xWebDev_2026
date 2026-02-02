/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/

function countVowels(str) {
  // Your code here
  if (str.length === 0) {
    return 0;
  }
  let countVowel = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  for (const ch of str.toLowerCase()) {
    if (vowels.has(ch)) countVowel++;
  }
  return countVowel;
}

module.exports = { countVowels };

// using includes
// let count = 0;
// const vowels = "aeiou";
// for (const ch of str.toLowerCase()) {
//   if (vowels.includes(ch)) {
//     count++;
//   }
// }
// my way below
function countVowelsMYLOGIC(str) {
  // Your code here
  if (str.length === 0) {
    return 0;
  }
  let countVowel = 0;
  for (const ch of str) {
    if (
      ch.toLowerCase() === "a" ||
      ch.toLowerCase() === "e" ||
      ch.toLowerCase() === "i" ||
      ch.toLowerCase() === "o" ||
      ch.toLowerCase() === "u"
    ) {
      ++countVowel;
    }
  }
  return countVowel;
}
