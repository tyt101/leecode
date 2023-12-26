/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 与题目226. 反转二叉树一致
var mirrorTree = function(root) {
  if(!root) return root
  let queue = [root]

  while(queue.length) {
      let top = queue.shift()
      let temp = top.left
      top.left = top.right
      top.right = temp
      if(top.left) {
          queue.push(top.left)
      }
      if(top.right) {
          queue.push(top.right)
      }
  }
  return root
};