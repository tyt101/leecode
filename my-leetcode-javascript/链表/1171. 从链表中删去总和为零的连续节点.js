/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// [1, 2, -3, 3, 1]
// 前缀和
var removeZeroSumSublists = function(head) {
  let dummy = new ListNode(0)

  dummy.next = head
  const seen = {}
  let prefix = 0

  for(let node = dummy; node != null; node = node.next) {
      prefix += node.val
      seen[prefix] = node
  }
  prefix = 0
  for(let node = dummy; node != null; node = node.next) {
      prefix += node.val
      node.next = seen[prefix].next
  }
  return dummy.next
};