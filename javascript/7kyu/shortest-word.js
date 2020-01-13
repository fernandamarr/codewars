// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let str = s.split(" ");
  str.sort((a,b) => {return a.length - b.length})
  return str[0].length
}