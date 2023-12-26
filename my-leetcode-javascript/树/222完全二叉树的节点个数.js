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
    let queue = [root]
    let count = 0
    while(queue.length) {
        count ++
        let top = queue.pop()
        if(top.left) queue.push(top.left)
        if(top.right) queue.push(top.right)
    }
    return count
};
