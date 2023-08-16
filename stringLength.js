// Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. Return true if the last character is either lower-case x or upper-case X, false otherwise.

function endsWithX(string) {
  const lastChar = string.charAt(string.length - 1);
  if (lastChar === "x" || lastChar === "X") {
    return true;
  } else return false;
}

module.exports = endsWithX;

//  Complete the function isAllX to determine if the entire string is made of lower-case x, upper-case X, or a mix of both. Return true if they are, false if not.
function isAllX(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== "x" && char !== "X") {
      return false; // If any character is not 'x' or 'X', return false
    }
  }
  return true; // If all characters are 'x' or 'X', return true
}

// Test cases
console.log(isAllX("xxx")); // true
console.log(isAllX("XxX")); // true
console.log(isAllX("xXxXx")); // true
console.log(isAllX("Hello")); // false
console.log(isAllX("xXxXxHxX")); // false
