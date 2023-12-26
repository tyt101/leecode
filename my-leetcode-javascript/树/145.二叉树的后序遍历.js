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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) return []
    let stack = [root]
    let res = []
    while(stack.length) {
        let cur = stack.pop()
        res.unshift(cur.val)
        if(cur.left) stack.push(cur.left)
        if(cur.right) stack.push(cur.right)
    }
    return res
};

var postorderTraversal = function(root) {
    if(!root) return []
    let res = []
    res.push(...postorderTraversal(root.left))
    res.push(...postorderTraversal(root.right))
    res.push(root.val)
    return res
};

var postorderTraversal = function(root, res = []) {
  if(!root) return []
  postorderTraversal(root.left, res)
  postorderTraversal(root.right, res)
  res.push(root.val)
  return res
};