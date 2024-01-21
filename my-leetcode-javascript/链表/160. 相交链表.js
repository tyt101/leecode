/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 遍历两遍就能找出来
// 消除A和B的步数差，当A走完就重新走回B，当B走完就重新走回A
// 那么A，B都走两遍，如果有交叉节点，那么就会相遇。
var getIntersectionNode = function(headA, headB) {
  while(headA == null && headB == null) return null
  let pA = headA;
  let pB = headB
  while(pA !== pB) {
      pA = pA == null ? headB : pA.next
      pB = pB == null ? headA : pB.next
  }
  return pA
};