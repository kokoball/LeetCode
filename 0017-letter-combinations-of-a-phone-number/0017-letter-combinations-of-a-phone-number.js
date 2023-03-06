/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const numArr = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let answer = []
    
    for(let i = 0; i < digits.length; i++ ){
        const nowNum = +digits[digits.length - 1 - i]
        
        if (answer.length === 0 ) answer = numArr[nowNum].split("")
        else {
            const temp = []
            for(let j = 0; j < numArr[nowNum].length; j++){
                for(let k = 0; k < answer.length; k++){
                    temp.push(numArr[nowNum][j] + answer[k])
                }
            }
            answer = temp
        }
    }
    
    return answer
};
