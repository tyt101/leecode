/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null
  let cur = head
  while(cur) {
     let next = cur.next
     cur.next = prev
     prev = cur
     cur = next
  }
  return prev
 };
var addTwoNumbers = function(l1, l2) {
  l1 = reverseList(l1)
  l2 = reverseList(l2)
  let addL = new ListNode(0,null)
  let p = addL
  let cup = 0
  while(l1 && l2) {
      let add = l1.val + l2.val
      if(cup > 0) {
          let newNode = new ListNode((cup + add) % 10, null)
          p.next = newNode
          p = newNode
      }else {
          let newNode = new ListNode(add % 10, null)
          p.next = newNode
          p = newNode
      }
      cup = Math.floor((add + cup) / 10)
      l1 = l1.next
      l2 = l2.next
  }
  while(l1) {
      let newNode = new ListNode((l1.val + cup) % 10, null)
      p.next = newNode
      p = newNode
      cup = Math.floor((l1.val + cup) / 10)
      l1 = l1.next
  }
  while(l2) {
      let newNode = new ListNode((l2.val + cup) % 10, null)
      p.next = newNode
      p = newNode
      cup = Math.floor((l2.val + cup) / 10)
      l2 = l2.next
  }

  if(cup > 0) {
      let newNode = new ListNode((cup) % 10, null)
      p.next = newNode
      p = newNode
  }
  return reverseList(addL.next)
};