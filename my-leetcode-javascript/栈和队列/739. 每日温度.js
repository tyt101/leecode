/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let stack = []
  let len = temperatures.length
  let res = new Array(len).fill(0)
  for(let i = 0; i < len; i++) {
      let cur = temperatures[i]
      while(stack.length && temperatures[stack[stack.length - 1]] < cur) {
          let top = stack.pop()
          res[top] = i - top
      } 
      stack.push(i)
  }
  return res
};