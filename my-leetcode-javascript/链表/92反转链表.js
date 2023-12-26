/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

  let i = 1
  let cur = head
  let sliceStartPreNode = null
  let sliceEndNextNode = null
  let sliceStartNode = null
  let sliceEndNode
  while(i <= right) {
      if(i === left - 1) {
          sliceStartPreNode = cur
      }
      if(i === left) {
          sliceStartNode = cur
      }
      if(i === right) {
          sliceEndNode = cur
      }
      cur = cur.next
      i++
  }
  sliceEndNextNode = sliceEndNode.next
  sliceEndNode.next = null
  console.log("sliceStartPreNode:", sliceStartPreNode)
  console.log("sliceStartNode:", sliceStartNode)
  console.log("sliceEndNode:", sliceEndNode)
  console.log("sliceEndNextNode:", sliceEndNextNode)


  const { head: headNode, tail: tailNode } = reverse(sliceStartNode)
  if(sliceStartPreNode) {
      sliceStartPreNode.next = headNode
  } else {
      head = headNode
  }

  tailNode.next = sliceEndNextNode
  return head
};


// 1 2 3 4 5
// 5 4 3 2 1 
var reverse = function(head) {
  let cur = head
  let pre = null
  while(cur) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
  }
  return {
      head: pre,
      tail: head
  }
}