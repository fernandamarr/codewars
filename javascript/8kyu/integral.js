// Create a function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

function integrate(coefficient, exponent) {
  let x = exponent + 1;
  let y = coefficient / x;
  return `${y}x^${x}`
}