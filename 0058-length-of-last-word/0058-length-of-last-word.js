/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(" ")
    const answerArr = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > 0) answerArr.push(arr[i])
    }
    
    return answerArr[answerArr.length - 1].length
};