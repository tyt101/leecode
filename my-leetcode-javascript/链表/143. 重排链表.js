/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// var reorderList = function(head) {
//     let head1 = new ListNode(0);
//     let head2 = new ListNode(0);
//     head1.next = head;
//     head2.next = head
//     let realHead1 = head1;
//     let realHead2 = head2;
//     let resHead = realHead1
//     let i = 0
//     while(head) {
//         if(i % 2) {
//             head2.next = head;
//             head2 = head2.next
//         } else {
//             head1.next = head;
//             head1 = head1.next
//         }
//         head = head.next
//     }
//     // 1 , 3
//     // 2 , 4
//     while(realHead2.next) {
//         let newReal = new ListNode(0)
//         newReal.next = realHead2.next
//         newReal.next.next = realHead1.next.next
//         realHead1.next = newReal.next
//         realHead2 = realHead2.next
//         realHead1 = realHead1.next.next
//     }
// };

// search mid
// reverse second half
// merge chain
var reorderList = function(head) {
  if(head == null) return null
  let l1 = head
  let mid = midList(head)
  let l2 = mid.next
  mid.next = null
  l2 = reverse(l2)
  return merge(l1, l2)
};

var midList = function(head) {
  let slow = head
  let fast = head
  while(fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
  }
  return slow
}


var reverse = function(head) {
  let prev = null
  let cur = head
  while(cur) {
      let curNext = cur.next
      cur.next = prev
      prev = cur
      cur = curNext
  }
  return prev
}

var merge = function (l1, l2) {
  while (l1 && l2) {
      let tempL1 = l1.next;
      let tempL2 = l2.next;

      l1.next = l2;
      l1 = tempL1;

      l2.next = l1;
      l2 = tempL2;
  }
}