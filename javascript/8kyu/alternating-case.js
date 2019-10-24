// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function (string) {
  let newString = '';
  
  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      newString += this[i].toLowerCase();
    } else {
      newString += this[i].toUpperCase();
    }
  }
  return newString;
}