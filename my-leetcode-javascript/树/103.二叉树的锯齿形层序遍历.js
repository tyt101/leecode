/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if(!root) return []
  let queue = [root]
  let res = []
  // 标识curQueue是push还是shift
  let index = 1
  while(queue.length) {
      // 记录当前层的元素
      let curQueue = []
      let len = queue.length
      // 循环遍历当前层的元素
      for(let i = 0; i < len; i++) {
          let top = queue.shift()
          // 单数层
          if (index&1) {
              // 双数层 => unshift => 先unshift后出
              curQueue.unshift(top.val)
             if(top.right) {
                 queue.push(top.right)
             } 
             if(top.left) {
                 queue.push(top.left)
             }
          } else {
              // 双数层 => push => 先push先出
              curQueue.push(top.val)
              if(top.right) {
                  queue.push(top.right)
              }
              if(top.left) {
                  queue.push(top.left)
              }
          }
      }
      // 层级改变
      index = index & 1 ? 0 : 1
      res.push(curQueue)
  }
  return res
};