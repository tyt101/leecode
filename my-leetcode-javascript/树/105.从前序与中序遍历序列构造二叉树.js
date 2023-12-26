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
 * @param {number[]} inorder
 * @return {TreeNode}
 */

let valToIndex = new Map()
var build = function(preorder, inorder, preStart, preEnd, inStart, inEnd) {
    if(preStart > preEnd || inStart > inEnd) return null
    let rootVal = preorder[preStart]
    let rootIndex = valToIndex.get(rootVal)
    let leftSize = rootIndex - inStart
    console.log(rootVal)
    let root = new TreeNode(rootVal)
    root.left = build(preorder, inorder, preStart + 1,leftSize + preStart,  inStart, rootIndex - 1)
    root.right = build(preorder, inorder,  preStart + 1 + leftSize, preEnd, rootIndex + 1, inEnd)

    return root
}

var buildTree = function(preorder, inorder) {
    for(let i = 0; i < inorder.length; i++) {
        valToIndex.set(inorder[i], i)
    }
    return build(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1)
};