/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr = [];
    
    for(let i = 0; i < nums.length; i++){
        if(!arr.includes(nums[i])) arr.push(nums[i])
        else arr.splice(arr.indexOf(nums[i]), 1)
    }
    
    return arr[0]
};