/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

let valToIndex = new Map()

var build = function(postorder, inorder, postStart, postEnd, inStart, inEnd) {
    if(postStart > postEnd || inStart > inEnd) return null
    let rootVal = postorder[postEnd]
    let rootIndex = valToIndex.get(rootVal)
    let leftLen = rootIndex - inStart
    let root = new TreeNode(rootVal)

    root.left = build(postorder, inorder, postStart, postStart + leftLen - 1, inStart, rootIndex - 1)
    root.right = build(postorder, inorder, postStart + leftLen, postEnd - 1, rootIndex + 1, inEnd)
    return root
}

var buildTree = function(inorder, postorder) {
    for(let i = 0; i < inorder.length; i++) {
        valToIndex.set(inorder[i], i)
    }

    return build(postorder, inorder, 0, postorder.length - 1, 0, inorder.length - 1)
};