// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    x = x.toLowerCase();
    if (x.split('').reverse().join('') === x) {
        return true;
    } else {
        return false;
    }
}