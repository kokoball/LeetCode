/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (left === right) return target <= nums[left] ? left : left +1;
        const mid = left + Math.floor((right - left)/2);
        if (nums[mid] < target) left = mid + 1;
         else right = mid;
    }
};