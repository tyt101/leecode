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
var swapPairs = function(head) {
  if(!head || !head.next) return head
  let one = head
  let two = head.next
  let three = two.next

  two.next = one
  one.next = swapPairs(three)

  return two
};