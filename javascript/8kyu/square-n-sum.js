// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {

    let sum = 0;
    let nums = [];

    for (let i = 0; i < numbers.length; i++) {
        let numsSquared = Math.pow(numbers[i], 2);
        console.log(numsSquared)
        nums.push(numsSquared)
        console.log(nums)
    }
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j]
    }
    return sum
}