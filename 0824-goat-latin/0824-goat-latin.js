/**
 * @param {string} sentence
 * @return {string}
 */
const toGoatLatin = str => {
    let words = str.split(' ');
    let vowels = ['a','e','i','o','u'];
    let ma = 'ma';
    let resSentense = words.map((val,index) =>{
      let firstChar = val[0];
      let firstCharIsVowel = vowels.includes(firstChar.toLowerCase());
      let resultWord = '';
      if (firstCharIsVowel){
        resultWord =  `${val}${ma}${'a'.repeat(index + 1)}`;
      }
      else {
        resultWord = `${val.slice(1)}${firstChar}${ma}${'a'.repeat(index + 1)}`;
      }
      return resultWord;
    })
    .join(' ');
    return resSentense;
};