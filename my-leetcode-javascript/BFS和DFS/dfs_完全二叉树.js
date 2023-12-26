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
var countNodes = function(root) {
    if(!root) return 0
    let count = 1
    const dfs = function(root) {
        if(root.left) {
            count ++
            dfs(root.left)
        }
        if(root.right) {
            count ++
            dfs(root.right)
        }
    }
    dfs(root)
    return count
};
