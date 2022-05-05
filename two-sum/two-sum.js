/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let map = new Map();
        for (let i=0; i<nums.length; i++){
            let num = target - nums[i];
            let numIdx = map.get(num);
             if(numIdx !== undefined){
                 result = [i, numIdx];
            break;
        }
        map.set(nums[i], i);
    }  
    return result;
   
};