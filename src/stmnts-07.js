/*
 * stmnts-07.js
 * Language: JavaScript
 * Test: tests/stmnts-07.test.js
 * Path: src/stmnts-07.js
 *
 * Logical Operations and Number Analysis Assignment:
 * Implement functions using logical operators, loops, and conditions.
 * These functions require you to combine earlier concepts.
 *
 * Note for beginners: Read each step carefully. Use loops like while or
 * do...while and Math.floor() when working with numbers.
 */

/**
 * Helper function to check if a value is an integer.
 * @param {*} value - Value to check.
 * @returns {boolean} - True if value is an integer, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
function isInteger(value) {
  if (Number.isInteger(value)) {
    return (true);
  }
  else {
    return (false);
  }
}

/**
 * Checks if both values are truthy.
 * @param {*} a - First value.
 * @param {*} b - Second value.
 * @returns {boolean} - True if both values are truthy, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 */
function logicalAnd(a, b) {
  if (a && b) {
    return (true);
  }
  else {
    return (false);
  }
}

/**
 * Checks if at least one value is truthy.
 * @param {*} a - First value.
 * @param {*} b - Second value.
 * @returns {boolean} - True if either value is truthy, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 */
function logicalOr(a, b) {
  if (a || b) {
    return (true);
  }
  else {
    return (false);
  }
}

/**
 * Returns the opposite of the given boolean.
 * @param {boolean} bool - Boolean value to invert.
 * @returns {boolean} - False if input is true, true if input is false.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
 */
function invertBoolean(bool) {
  if (!bool) {
    return (true);
  }
  else {
    return (false);
  }
}

/**
 * Counts the number of digits in an integer.
 * @param {number} num - The input number.
 * @returns {number} - Number of digits in `num`.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
 */
function countDigits(num) {
  let count = 0;
  do {
    ++count;
    num = Math.floor(num / 10);
  }
  while (num > 0);
  return (count);
}

/**
 * Computes the sum of the digits of an integer.
 * @param {number} num - The input number.
 * @returns {number} - Sum of its digits.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 */
function sumOfDigits(num) {
  let sum = 0;
  while (num >= 1) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return (sum);
}

/**
 * Reverses the digits of a number.
 * @param {number} num - The input number.
 * @returns {number} - The reversed number.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 */
function reverseNumber(num) {
  let reversed = 0;
  let expon = countDigits(num);
  while (num >= 1) {
    --expon;
    reversed += (num % 10) * (10 ** expon);
    num = Math.floor(num / 10);
  }
  return (reversed);
}

/**
 * Determines if a number is within a given range, inclusive.
 * @param {number} num - The number to check.
 * @param {number} min - Lower bound.
 * @param {number} max - Upper bound.
 * @returns {boolean} - True if num is between min and max, inclusive.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 */
function isWithinRange(num, min, max) {
  if (num >= min && num <= max) {
    return (true);
  }
  else {
    return (false);
  }
}

// Export functions
module.exports = {
  isInteger,
  logicalAnd,
  logicalOr,
  invertBoolean,
  countDigits,
  sumOfDigits,
  reverseNumber,
  isWithinRange,
};
