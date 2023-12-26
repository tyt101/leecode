/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let n = nums.length
  for(let i = 1; i <= k; i++) {
      let p = 0, q = i
      while(q < n) {
          if(nums[p] === nums[q]) {
              return true
          }
          q++
          p++
      }
  }
  return false
};