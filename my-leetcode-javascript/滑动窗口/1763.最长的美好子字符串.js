/**
 * @param {string} s
 * @return {string}
 * @description 暴力解法
 */
var longestNiceSubstring = function(s) {
  let n = s.length
  let maxLen = 0, maxRes = "";
  if(n === 1) return ""
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j <= n; j++) {
      if(isNice(s.slice(i,j)) && j - i + 1 > maxLen) {
        maxRes = s.slice(i,j)
        maxLen = j - i + 1
      }
    }
  }
  return maxRes
};

var isNice = function(s) {
  for(let i = 0; i < s.length; i++) {
    if(!s.includes(s[i].toLowerCase()) || !s.includes(s[i].toUpperCase())) {
      return false
    }
  }
  return true
}