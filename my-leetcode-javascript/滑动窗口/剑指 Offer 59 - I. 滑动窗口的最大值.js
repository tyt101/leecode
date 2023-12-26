/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let res = []
  let result = []
  let len = nums.length
  for(let i =0; i < len; i++) {
      while(res.length && nums[res[res.length - 1]] < nums[i]) {
          res.pop()
      }

      res.push(i)

      while(res.length && res[0] <= i - k) {
          res.shift()
      }

      if(i >= k -1) {
          result.push(nums[res[0]])
      }
  }
  return result
};