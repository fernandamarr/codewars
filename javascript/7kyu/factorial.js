// Yor task is to write function factorial

function factorial(n){
  return n < 0 ? -1 : n === 0 ? 1 : n * factorial(n -1)
}