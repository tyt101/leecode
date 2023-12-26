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
 * @return {TreeNode}
 */
// 与题目 剑指Offer 27.二叉树的镜像 一致
var invertTree = function(root) {
  if(!root) return root
  let left = invertTree(root.left)
  let right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
};