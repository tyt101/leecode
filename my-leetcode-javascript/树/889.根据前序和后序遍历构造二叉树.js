/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let ValToIndex = new Map()
var build = function(preorder, postorder, preStart, preEnd, postStart, postEnd) {
    if (preStart > preEnd || postStart > postEnd) return null
    if(preStart === preEnd) {
        return new TreeNode(preorder[preStart])
    }
    let rootVal = preorder[preStart]
    let leftRootVal = preorder[preStart + 1]
    let rootIndex = ValToIndex.get(leftRootVal)
    var leftSize = rootIndex - postStart + 1;
    let root = new TreeNode(rootVal)
    root.left = build(preorder, postorder, preStart + 1, preStart + leftSize,postStart,rootIndex)
    root.right = build(preorder, postorder,preStart + leftSize + 1,preEnd,rootIndex + 1, postEnd - 1)
    return root
}
var constructFromPrePost = function(preorder, postorder) {

    for(let i = 0; i < postorder.length; i ++) {
        ValToIndex.set(postorder[i], i)
    }
    return build(preorder, postorder, 0, preorder.length - 1, 0, postorder.length - 1)
};