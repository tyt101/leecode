/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  // cbaebabacd
  // abc

  let sLen = s.length, plen = p.length
  if(sLen < plen) {
    return []
  }
  let sCount = new Array(26).fill(0)
  let pCount = new Array(26).fill(0)
  let res = []
  for(let i = 0; i < plen; i++) {
    ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()]
    ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()]
  }

  if(sCount.toString() === pCount.toString()) {
    res.push(0)
  }

  for(let i = 0; i < sLen - plen; i++) {
    --sCount[s[i].charCodeAt() - 'a'.charCodeAt()]
    ++sCount[s[i + plen].charCodeAt() - 'a'.charCodeAt()]

    if(sCount.toString() === pCount.toString()) {
      res.push(i + 1)
    }
  }

  return res
};