/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * @result 超时了
 */
var minSubArrayLen = function(target, nums) {
    let min = Math.min(), len = nums.length, changed = false
    for(let i = 1; i <= len; i++) {
        let splLen  = i
        for(let j =0; j < len; j++){
            if(Sum(nums.slice(j, j + splLen)) >= target){
                min = Math.min(min, splLen)
                changed = true
            }
        }
    }
    if(changed)
        return min
    return 0
};

var Sum = function(arr) {
   return arr.reduce((a,b) => a+b)
}


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * @result 成功
 */
var minSubArrayLen = function(s, nums) {
  
  let result = Math.min();
  let sum = 0; // 滑动窗口数值之和
  let i = 0; // 滑动窗口起始位置
  let subLength = 0; // 滑动窗口的长度
  for (let j = 0; j < nums.length; j++) {
      sum += nums[j];
      // 注意这里使用while，每次更新 i（起始位置），并不断比较子序列是否符合条件
      while (sum >= s) {
          subLength = (j - i + 1); // 取子序列的长度
          result = result < subLength ? result : subLength;
          sum -= nums[i++]; // 这里体现出滑动窗口的精髓之处，不断变更i（子序列的起始位置）
      }
  }
  // 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
  return result == Math.min() ? 0 : result;
};