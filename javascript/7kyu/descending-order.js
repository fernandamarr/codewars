// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  let arr = Array.from(n.toString()).map(Number);
  arr.sort((a,b) => b-a)
  let newNum = arr.toString().replace(/,/g, "")
  return Number(newNum)
}