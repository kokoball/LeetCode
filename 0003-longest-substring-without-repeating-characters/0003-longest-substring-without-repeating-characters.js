/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const arr = s.split("");
    let answer = 0
    let checkArr = [];
    
    for(let i = 0; i < arr.length; i++){
        if(checkArr.includes(arr[i])){
            if(answer < checkArr.length) answer = checkArr.length;
            const checkNum = checkArr.indexOf(arr[i])
            const tempArr = checkArr.slice(checkNum + 1, checkArr.length)
            checkArr = tempArr
            checkArr.push(arr[i])
        } else checkArr.push(arr[i])
    }
    
    if(answer < checkArr.length) answer = checkArr.length;
    if (!answer) return s.length
    return answer
};