/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root) return root
  traverse(root.left, root.right)
  return root
};

var traverse = function(A, B) {
  if(!A || !B) return
  A.next = B
  traverse(A.left, A.right)
  traverse(B.left, B.right)
  traverse(A.right, B.left)
}