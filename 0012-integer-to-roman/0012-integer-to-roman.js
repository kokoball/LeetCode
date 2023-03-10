/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let answer = ""
    let numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let symbolArr = ['M', 'CM', 'D', 'CD', 'C','XC', 'L','XL', 'X','IX', 'V', 'IV', 'I']
    
    for(let i = 0; i < numArr.length; i++){
        let nowValue = Math.floor(num / numArr[i])
        num -= numArr[i] * nowValue
        answer += symbolArr[i].repeat(nowValue)
    }

    return answer
};