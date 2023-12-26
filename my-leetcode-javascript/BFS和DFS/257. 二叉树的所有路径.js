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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let arr = dfs(root)
    return arr
};

const dfs = function(root, str='', arr=[]) {
    if(!root) return
    str += root.val
    if(!root.left && !root.right) {
        arr.push(str)
        str = ''
        return arr
    }
    if(root.left) {
        str+='->'
        dfs(root.left, str, arr)
        str = str.slice(0, str.length - 2)
    }
    if(root.right) {
        str+='->'
        dfs(root.right, str, arr)
        str = str.slice(0, str.length - 2)
    }
    return arr
}
