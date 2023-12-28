/**

给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。 

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
 */

function combinationSum2(candidates, target) {
  let res = []
  let track = []
  let trackSum = 0

  // 无重复，所以先排序
  const sorttedCandidates = candidates.sort((a,b)=>a-b)

  function dfs(nums, start){
    if(trackSum == target) {
      res.push([...track])
    }

    if(trackSum > target) {
      return;
    }

    for(let i = start; i < nums.length; i++) {
      if(i > start && nums[i] == nums[i - 1]) continue;
      track.push(nums[i])
      trackSum += nums[i]

      dfs(nums, i + 1)

      track.pop()
      trackSum -= nums[i]
    }
  }

  dfs(sorttedCandidates, 0)
  return res
}

console.log(combinationSumm([10,1,2,7,6,1,5]), 8)