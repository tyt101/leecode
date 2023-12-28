/**
 * 
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 输入：nums = [1,1,2]
 * 输出：
  [[1,1,2],[1,2,1],[2,1,1]]
 */


function permuteUnique (nums) {
  let res = []
  let track = []
  let used = new Array(nums.length).fill(false)

  function dfs(nums, track) {
    if(track.length == nums.length) {
      res.push([...track])
    }

    for(let i = 0; i < nums.length; i++) {
      if(used[i]) continue;

      // 保证重复数字的相对顺序, 使 i始终在 i-1 后面就能够保证不出现重复全排列
      // 比如 1 2 2' 保证2'始终在2后面，就只有三种情况 1 2 2', 2 1 2' , 2 2' 1
      if(i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
        continue;
      }

      // 排列过程
      track.push(nums[i])
      used[i] = true
      dfs(nums, track)
      // 弹出
      track.pop()
      used[i] = false
    }
  }

  dfs(nums, track)
  return res
}

console.log(permuteUnique([1, 2, 2]))