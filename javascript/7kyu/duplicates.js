// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

function duplicateCount(text) {
    let sameChar = [];
    let str = text.toLowerCase().split("").sort().join("").match(/(.)\1+/g);

    if (str !== null) {
        str.forEach((elem) => {
            sameChar.push(elem[0]);
        });
    }
    return sameChar.length;
}