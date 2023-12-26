/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let p = 0, q = 0
  while(q < nums.length) {
      if(nums[q] !== val) {
          nums[p++] = nums[q]
      }
      q++
  }
  return p
};