// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
  let strInt = [];
  let nonStr = [];
  
  x.map(e => { 
    typeof e === "string" ? strInt.push(Number(e)) : nonStr.push(e)
  });
  
  return nonStr.reduce((a,b) => a + b, 0) - strInt.reduce((a, b) => a + b, 0);
}