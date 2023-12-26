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
var preorderTraversal = function(root) {
    if(!root) return []
    let stack = [root]
    let res = []
    while(stack.length) {
        let cur = stack.pop()
        res.push(cur.val)
        if(cur.right) stack.push(cur.right)
        if(cur.left) stack.push(cur.left)
    }
    return res
};

var preorderTraversal = function(root) {
    if(!root) return []
    let res = []
    res.push(root.val)
    res.push(...preorderTraversal(root.left))
    res.push(...preorderTraversal(root.right))
    return res
};

// 递归解法，将结果数组放在参数里
var preorderTraversal = function(root, res = []) {
  if(!root) return []
  res.push(root.val)
  preorderTraversal(root.left, res)
  preorderTraversal(root.right, res)
  return res
};