// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if (str.length < 2) {
    return true;
  } else if (str.charAt(0) !== str.charAt(str.length - 1)) {
    return false;
  } else {
    return palindrome(str.slice(1, str.length - 1));
  }
}

module.exports = palindrome;
