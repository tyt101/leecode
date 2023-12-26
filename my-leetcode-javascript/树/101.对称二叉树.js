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
 * @return {boolean}
 */

var check = function(lTree, rTree){
    if(!lTree && !rTree) return true
    if(!lTree || !rTree) return false

    return lTree.val === rTree.val && check(lTree.left, rTree.right) && check(lTree.right, rTree.left)
}


var isSymmetric = function(root) {
    // 复制一份root进行比对是否镜像
    return check(root, root)
};
