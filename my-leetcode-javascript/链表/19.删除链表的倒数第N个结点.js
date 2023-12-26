/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let i = 0
    let cur = head
    while(cur) {
        i ++ 
        cur = cur.next
    }
    let curS = head
    let m = 0
    while(curS) {
        if(i === n) {
            return head.next
        }
        if(m === i-n-1) {
            curS.next = curS.next.next
        }
        curS = curS.next
        m++
    }
    return head
};



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head
    let m = n, p = dummy, q = dummy
    while(m--) {
        q = q.next
    }
    while(q.next) {
        p = p.next
        q = q.next
    }
    p.next = p.next.next
    return dummy.next
};