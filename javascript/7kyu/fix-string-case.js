// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s) {
    let upper = s.split('').filter(x => x.match(/[A-Z]/)).length;
    let lower = s.split('').filter(x => x.match(/[a-z]/)).length;

    if (lower >= upper) {
        return s.toLowerCase();
    } else {
        return s.toUpperCase();
    }
}