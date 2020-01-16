// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) { 
  n = n + ''
  n = n.split('').reverse().join('');
  return n.toString(10).replace(/\D/g, '0').split('').map(Number);
}