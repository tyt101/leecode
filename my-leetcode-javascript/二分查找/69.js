/**
 * @param {number} x
 * @return {number}
 */
/**
 * 
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

 

示例 1：

输入：x = 4
输出：2
示例 2：

输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 

提示：

0 <= x <= 231

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/sqrtx
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 
*/
//  x = 4: 0, 1, 2, 3, 4
var mySqrt = function(x) {
  let l = 0
  let r = x
  let ans = -1
  while(l <= r) {
      mid = Math.round((l + r) / 2)
      let res = mid * mid
      if(res < x) {
          ans = mid
          l = mid + 1
      }else if( res > x) {
          r = mid - 1
      }else {
          return mid
      }
  }
  return ans
};