/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let cur = head
  let pre = head
  while(cur) {
      if(cur.val === val) {
          if(cur === head) {
              head = head.next
          } else {
              pre.next = cur.next
          }
      } else {
          pre = cur
      }
      cur = cur.next
  }
  return head
};