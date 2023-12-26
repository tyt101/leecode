/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var threeSumClosest = function(nums, target) {
  nums.sort((a,b) => a-b)
  let res = Infinity
  for(let i = 0; i < nums.length; i ++) {
      // 固定一个数，其他两个数霜之争
      let left = i+1
      let right = nums.length - 1

      while(left < right) {
          let sum = nums[i] + nums[left] + nums[right]

          if(Math.abs(sum-target) < Math.abs(res - target)) {
              res = sum
          }

          if(sum < target) {
              left ++
          } else if(sum > target) {
              right --
          }else {
              return sum
          }
      }
  }

  return res
};