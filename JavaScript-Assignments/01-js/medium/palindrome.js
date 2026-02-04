/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length === 0) return true;
  if (str.length === 1) return true;

  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (cleaned.length === 0) return true;

  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}

module.exports = isPalindrome;
