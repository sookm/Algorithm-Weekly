/**
 * @param {number[]} nums
 * @return {number}
 */

// input nums as Array
// find the maximum number
// count of the consecutive maximum number 
// return the consecutive number

var findMaxConsecutiveOnes = function(nums) {
    let largestCount = 0;
    let currentCount = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === 0) {
            currentCount = 0;
        } else {
            currentCount++;
        }
        if (currentCount > largestCount) largestCount = currentCount;
    }
    return largestCount;    

};