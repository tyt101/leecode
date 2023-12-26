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
 * @description 新增一个dummy结点，使dummy.next = head, 这样当next结点和next.next结点重复的时候，就可以直接跳过删除。
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
}