/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @desc 我做的
 */
var findMaxAverage = function(nums, k) {
  if(nums.length === 1 && k === 1) return nums[0]
  let max = Math.max()
  for(let i = 0; i <= nums.length - k; i ++) {
      let sum = 0 , p = i;
      while(p < k + i && p < nums.length) {
          sum += nums[p]
          p ++
      }
      max = Math.max(sum/k, max)
  }
  return max
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @desc 更好的
 */
var findMaxAverage = function(nums, k) {
  let maxSum = 0, max = 0
  for(let i = 0; i < k; i ++) {
      maxSum += nums[i]
  }
  max = maxSum
  for(let j = k; j < nums.length; j++) {
      maxSum = maxSum - nums[j - k] + nums[j]
      max = Math.max(max, maxSum)
  }
  return max / k
};