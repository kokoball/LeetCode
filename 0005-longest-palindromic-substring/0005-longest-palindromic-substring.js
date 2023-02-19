/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let answer = s[0];
  const N = s.length;

  for (let i=0; i < N; i++) {
    for (let j=i+answer.length; j < N; j++) {
      if (s[i] === s[j] && isPalindrome(s, i, j) ) {
        answer = s.slice(i, j+1);
      } 
    }
  }
  return answer;
};

const isPalindrome = (string, left, right) => {
  let returnIsPalindrome = true;
  while (left < right) {
    if (string[left] !== string[right]) {
      returnIsPalindrome = false;
      break
    }
    left++;
    right--;
  }
  return returnIsPalindrome;
}