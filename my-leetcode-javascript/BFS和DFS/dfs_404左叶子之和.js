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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0

    const dfs = function(root,  flag = true) {
        if(!root.left && !root.right && flag) sum += root.val
        if(root.left) {
            dfs(root.left, true)
        }
        if(root.right) {
            dfs(root.right, false)
        }
    }
    dfs(root, false)
    return sum
};
