var nextLargerNodes = function(head) {
  const increaseStack = []      // 单调递增栈结构
  let res = []
  let cur = head
  let idx = -1
  while(cur) {
      let val = cur.val
      res.push(0)
      idx ++
      while(increaseStack.length && increaseStack[increaseStack.length - 1][0] < val) {
          res[increaseStack.pop()[1]] = cur.val
      }
      increaseStack.push([cur.val,idx])
      cur = cur.next
  }
  return res
};