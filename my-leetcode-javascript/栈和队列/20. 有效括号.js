/**
 * @param {string} s
 * @return {boolean}
 */
//  用一个map来维护括号对应关系

let map = {
  '(':')',
  '{':'}',
  '[':']'
}
var isValid = function(s) {
  if(s.length <= 0) return true
  let stack = []
  let len = s.length, i = 0
  while(i < len) {
      let cur = s[i]
      if(cur === '(' || cur === '{' || cur === '[') 
          stack.push(map[cur])
      else {
          if(!stack.length || stack.pop() !== cur )
              return false
      }
      i ++
  }
  return ! stack.length
};