/*
 * stmnts-03.js
 * Language: JavaScript
 * Test: tests/stmnts-03.test.js
 * Path: src/stmnts-03.js
 *
 * Arithmetic Expressions Assignment:
 * Implement the following functions to perform calculations involving
 * geometric shapes. These challenges integrate arithmetic operators with
 * expressions and rounding.
 *
 * Note: Follow the formulas carefully and use Number.toFixed() to round your
 * answers to 2 decimal places.
 */

/**
 * Calculates the perimeter of a rectangle rounded to 2 decimal places.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @returns {number} - The perimeter of the rectangle rounded to 2 decimal places.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 */
function rectanglePerimeter(width, height) {
  let perimeter = (2 * width) + (2 * height);
  return (perimeter.toFixed(2));
}

/**
 * Calculates the area of a rectangle rounded to 2 decimal places.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @returns {number} - The area of the rectangle rounded to 2 decimal places.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 */
function rectangleArea(width, height) {
  let area = width * height;
  return (area.toFixed(2));
}

/**
 * Calculates the circumference of a circle with a known radius rounded
 * to 2 decimal places.
 *
 * The math equation is: c = 2 * π * radius
 *
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The circumference of the circle rounded to 2 decimal places.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 */
function circleCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  return (circumference.toFixed(2));
}

/**
 * Calculates the area of a circle with a known radius rounded to 2 decimal places.
 *
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The area of the circle rounded to 2 decimal places.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 */
function circleArea(radius) {
  let cArea = Math.PI * (radius ** 2);
  return (cArea.toFixed(2));
}

/**
 * Calculates the area of a triangle with a known base and height rounded
 * to 2 decimal places.
 *
 * @param {number} base - The base of the triangle.
 * @param {number} height - The height of the triangle.
 * @returns {number} - The area of the triangle rounded to 2 decimal places.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 */
function triangleArea(base, height) {
  let tArea = 0.5 * (base * height);
  return (tArea.toFixed(2));
}

/**
 * Calculates the hypotenuse of a right triangle with two given sides rounded
 * to 2 decimal places.
 *
 * @param {number} sideA - The length of side A.
 * @param {number} sideB - The length of side B.
 * @returns {number} - The hypotenuse of the triangle rounded to 2 decimal places.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
 */
function pythagorean(sideA, sideB) {
  let hypot = Math.sqrt((sideA ** 2) + (sideB ** 2));
  return (hypot.toFixed(2));
}

/**
 * Calculates the diagonal of a rectangle using the Pythagorean theorem,
 * rounded to 2 decimal places.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @returns {number} - The diagonal of the rectangle rounded to 2 decimal places.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
 */
function rectangleDiagonal(width, height) {
  let diagonal = pythagorean(width, height);
  return (diagonal);
}

/**
 * Calculates the area of a trapezoid rounded to 2 decimal places.
 *
 * The area formula for a trapezoid is: area = ((base1 + base2) / 2) * height.
 *
 * @param {number} base1 - The length of the first base.
 * @param {number} base2 - The length of the second base.
 * @param {number} height - The height of the trapezoid.
 * @returns {number} - The area of the trapezoid rounded to 2 decimal places.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division
 */
function trapezoidArea(base1, base2, height) {
  let trArea = ((base1 + base2) / 2) * height;
  return (trArea.toFixed(2));
}

// DO NOT EDIT THE FOLLOWING EXPORT STATEMENT.
// The test file relies on these exported function names.
module.exports = {
  rectanglePerimeter,
  rectangleArea,
  circleCircumference,
  circleArea,
  triangleArea,
  pythagorean,
  rectangleDiagonal,
  trapezoidArea,
};
