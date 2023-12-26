/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  nums.sort((a, b) => a - b)
  let len = nums.length, min = Math.min()
  if(len === 1 && k === 1) return 0
  for(let i = 0; i <= len - k; i ++) { 
      min = Math.min(min, minSub(nums.slice(i, i + k)))
  }
  return min
};

var minSub = function(nums) {
  let min = Math.min()
  let max = Math.max()
  for(let i = 0; i < nums.length; i++) {
      max = Math.max(nums[i], max)
      min = Math.min(nums[i], min)
  }
  return max - min
}
