/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if(x < 0) return false
    let stringX = String(x)
    
    let halfNum = Math.floor(stringX.length / 2)
    if(x % 2 === 1) halfNum++
    
    for(let i = 0; i < halfNum; i++){
       if(stringX[i] !== stringX[stringX.length - 1 - i]) return false
        
    }

    return true
};