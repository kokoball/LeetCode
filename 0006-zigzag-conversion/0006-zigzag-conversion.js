/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let answer = ''
    const arr = []
    let arrow = true
    let row = 0;
    let col = 0;
    
    if(numRows === 1) return s
    
    for(let i = 0; i < numRows; i++){
        const tempArr = Array.from({length: s.length}, () => "")
        arr.push(tempArr)
    }
    
    arr[row][col] = s[0]
    
    for(let i = 1; i < s.length; i++ ){
        if(arrow)row++
        else{
            console.log(row, col)
            if(row !== 0) row--
            col++
        }
        arr[row][col] = s[i]
        
        if(i % (numRows - 1) === 0) arrow = !arrow
        
    }
    
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < s.length; j++){
            if(arr[i][j] !== '') answer += arr[i][j]
        }        
    }
    
    return answer
};