// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let newStr = str.toLowerCase();
    let exes = 0;
    let ohs = 0
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].includes('x')) {
            exes++;
            // console.log('these are the exes:' + exes)
        } else if (newStr[i].includes('o')) {
            ohs++;
            // console.log('these are the ohs' + ohs)
        }
    }
    if (exes === ohs) {
        return true;
    } else {
        return false;
    }
}

console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("ooxx")) // true
console.log(XO("xooxx")) // false
console.log(XO("ooxXm")) // true
console.log(XO("zpzpzpp")) // true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo")) // false