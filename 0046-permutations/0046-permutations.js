/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    
    const permutation = (selected) => {
      if(selected.length === nums.length){
            ans.push(selected);
            return
        }
        
        for(let i = 0; i < nums.length; i++){
            if(!selected.includes(nums[i])){
                permutation([...selected, nums[i]])
            }
        }
    }
    
    permutation([])
    
    return ans;
};