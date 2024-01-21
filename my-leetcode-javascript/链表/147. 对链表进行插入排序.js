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
var insertionSortList = function(head) {
  // head 不存在，直接返回
  if(head == null) return head

  const dummyHead = new ListNode(0)
  dummyHead.next = head;
  let lastSorted = head;
  let cur = head.next

  while(cur !== null) {
      if(lastSorted.val <= cur.val) {
          lastSorted = lastSorted.next
      } else {
          let prev = dummyHead;
          while(prev.next.val <= cur.val) {
              prev = prev.next
          }
          lastSorted.next = cur.next
          cur.next = prev.next
          prev.next = cur
      }
      cur = lastSorted.next
  }
  return dummyHead.next
};