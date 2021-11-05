// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
  let reversedNumber = "";
  let stringfiedNumber = number.toString();
  for (n of stringfiedNumber) {
    reversedNumber = n + reversedNumber;
  }
  return Math.sign(number) * parseInt(reversedNumber);
}

module.exports = reverseInt;
