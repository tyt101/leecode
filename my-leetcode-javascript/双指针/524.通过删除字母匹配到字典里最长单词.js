/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    
  let minLenWord = ""
  for(let i = 0; i < dictionary.length; i++) {
      let curWord = dictionary[i]
      let m = 0
      let j = 0
      while(m < curWord.length && j < s.length) {
          for(j = 0; j < s.length;) {
              if(s[j]=== curWord[m]) {
                  m++
              }
              j++
          }
      }
      if(m>= curWord.length) {
          console.log(curWord,minLenWord)
          if(curWord.length === minLenWord.length) {
              minLenWord = curWord> minLenWord ? minLenWord : curWord
          } else {
              minLenWord = curWord.length > minLenWord.length ? curWord: minLenWord
          }
      }
  }
  return minLenWord
};