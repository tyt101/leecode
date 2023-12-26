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
var deleteDuplicates = function(head) {

  const dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  if(!head || !head.next) {
      return head
  }

  while(cur.next && cur.next.next) {
      if(cur.next.val == cur.next.next.val) {
          let val = cur.next.val
          while(cur.next && cur.next.val == val) {
              cur.next = cur.next.next
          }
      } else {
          cur = cur.next
      }
  }
  return dummy.next


  // let pre = head, cur = head
  // while(cur !== null && cur.next !== null) {
  //     if(cur.val == cur.next.val && cur == head) {
  //         while(cur.val == cur.next.val) {
  //             cur = cur.next
  //         }
  //         pre = cur.next
  //         head = pre
  //         cur = cur.next
  //     } else if(cur.val == cur.next.val) {
  //         while(cur.val == cur.next.val) {
  //             pre.next = cur.next
  //         }
  //         cur = cur.next
  //     } else {
  //         pre = cur
  //         cur = cur.next
  //     }
  // }
  // return head
};
// 1. 重复数字不在开头： cur 为重复数字 cur.val !== cur.next.val时，pre.next = cur.next
// 2. 重复数字在开头：cur.next.val !== cur.val 时, pre = cur.next, head = pre
// 3. pre记录为当前cur的前一个node