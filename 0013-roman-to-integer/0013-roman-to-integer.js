/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0
    let numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let symbolArr = ['M', 'CM', 'D', 'CD', 'C','XC', 'L','XL', 'X','IX', 'V', 'IV', 'I']
    
    
    
    for(let i = 0; i < s.length; i++){
        if(i + 1 < s.length){
            const temp = s[i] + s[i + 1]
            if(symbolArr.indexOf(temp) !== -1){
                answer += numArr[symbolArr.indexOf(temp)]
                i++
                continue
            }
        }
        const temp = s[i]
        if(symbolArr.indexOf(temp) !== -1)answer += numArr[symbolArr.indexOf(temp)]
    }

    return answer
};

