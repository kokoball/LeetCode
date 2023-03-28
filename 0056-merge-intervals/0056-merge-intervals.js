/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    const answer = [[...intervals[0]]];
    for (let i=1; i < intervals.length; i++) {
        const lastIdx = answer.length-1;
        
        if (answer[lastIdx][1] >= intervals[i][0]) {
            if (answer[lastIdx][1] < intervals[i][1]) {
                answer[lastIdx][1] = intervals[i][1];
            }
        } else {
            answer.push([...intervals[i]])
        }
    }
    return answer;
};
