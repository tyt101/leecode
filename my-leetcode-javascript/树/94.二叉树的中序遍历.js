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
var inorderTraversal = function(root) {
    if(!root) return []
    let cur = root
    let stack = [], res = []
    while(cur || stack.length ) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
    return res
};

var inorderTraversal = function(root) {
    if(!root) return []
    let res = []
    res.push(...inorderTraversal(root.left))
    res.push(root.val)
    res.push(...inorderTraversal(root.right))
    return res
};

var inorderTraversal = function(root, res = []) {
  if(!root) return []
  inorderTraversal(root.left, res)
  res.push(root.val)
  inorderTraversal(root.right, res)
  return res
};