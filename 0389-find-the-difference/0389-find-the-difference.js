/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  let sSplit = s.split('').sort()
  let tSplit = t.split('').sort()
  
  for( let i = 0; i < tSplit.length; i++){
    
    if( sSplit[i] !== tSplit[i]){

      return tSplit[i];
    }
  } 
   
};