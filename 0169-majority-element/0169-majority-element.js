/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length === 1) return nums[0];
    
    let answer = 0;
    let temp = 0;
    let map = new Map();
    
    for(let x of nums) {
        if(!map.get(x)) {
            map.set(x, 1);
        } else {
            map.set(x, map.get(x) + 1);
        }
    }
    
    for(let [key, val] of map) {
        if(temp < val) {
            temp = val;
            answer = key;
        }
    }
    
    return answer;
};