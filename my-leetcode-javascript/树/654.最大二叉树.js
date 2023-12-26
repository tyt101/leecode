/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var findMaxIndex = function(nums, l, r) {
  let maxIndex = l
  for (let i = l; i <= r; i++) {
      if(nums[i] > nums[maxIndex]) {
          maxIndex = i
      }
  }
  return maxIndex
}

var build = function(nums, l, r) {
  if(l > r || !nums.length) return null
  let maxIndex = findMaxIndex(nums, l, r)
  let node = new TreeNode(nums[maxIndex])
  node.left = build(nums,l, maxIndex - 1)
  node.right = build(nums, maxIndex + 1, r)
  return node
}
var constructMaximumBinaryTree = function(nums) {
  return build(nums, 0, nums.length - 1)
};

