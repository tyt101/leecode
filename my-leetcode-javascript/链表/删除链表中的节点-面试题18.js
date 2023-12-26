/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */


var deleteNode = function(head, val) {
  let prev = head
  let cur = head
  while(cur) {
      if(cur.val === val) {
          if(cur === head) {
              head = head.next
          } else {
              prev.next = cur.next
          }
      } else {
          prev = cur
      }
      cur = cur.next
  }
  return head
};