// Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function sexy_prime(x, y) which returns true if x & y are sexy, false otherwise.

function sexy_prime(x, y) {
    let isPrime = true;

    if (x < 2 || y < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
        for (let j = 2; j <= Math.sqrt(y); j++) {
            if (x % i === 0 && y % j === 0) {
                isPrime = false;
            }
        }
    }
    if (isPrime && x + 6 === y || isPrime && y + 6 === x) {
        return true;
    } else {
        return false;
    }
}

console.log(sexy_prime(5, 11))
// --> True

console.log(sexy_prime(61, 67))
// --> True

console.log(sexy_prime(7, 13))
// --> True

console.log(sexy_prime(5, 7))
// --> False

console.log(sexy_prime(1, 7))
// --> False
// ( 1 is not considered prime )