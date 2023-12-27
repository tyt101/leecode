/**
 * 
 * [1, 2, 3]
 * [1, 2, 3] , [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
 */



// 可重复的全排列
function backtrack(arr, k) {

  let res = []
  let track = []
  let used = new Array(arr.length).fill(false)

  function dfs(arr, tracked, used) {

    if(tracked.length == k) {
      res.push([...tracked])
    }

    for(let i = 0; i < arr.length; i++) {

      if(used[arr[i]]) {
        continue;
      }

      used[arr[i]] = true
      tracked.push(arr[i])
      dfs(arr, tracked, used)
      tracked.pop()
      used[arr[i]] = false

    }
  }

  dfs(arr, track, used)

  return res
}

console.log(backtrack([1,2,3], 1))
console.log(backtrack([1,2,3], 2))
console.log(backtrack([1,2,3], 3))