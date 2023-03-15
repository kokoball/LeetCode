/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let answer = 0
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target) break;
        answer++
    }
    
    return answer
    
};