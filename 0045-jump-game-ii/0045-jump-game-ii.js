/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const dp = [0];
    for(let i = 1; i < nums.length; i++){
        dp[i] = Number.MAX_VALUE;
    }
    
    nums.map((num, i) => {
        for(let j = 1; j <= num && i+j < nums.length; j++){
            dp[i+j] = dp[i] + 1 < dp[i+j] ? dp[i] + 1 : dp[i+j];
        }
    })
    
    return dp[nums.length - 1];
};