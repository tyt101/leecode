### Summerize 总结
```javascript
// 数学中的数列：
Sn = a1 + a2 + a3 + a4 + ... + an

//nums = [1, 2, 6, 4, -1, 5]
for(let i = 0; i < nums.length; i++) {
  preNums[i + 1] = preNums[i] + nums[i]
}
//preNums = [1, 3, 9, 13, 12, 17]
```

### Example 示例
```javascript
// leetCode: 1171. 从链表中删去总和为零的连续节点
var removeZeroSumSublists = function(head) {
    let dummy = new ListNode(0)

    dummy.next = head
    const seen = {}   //  前缀和表
    let prefix = 0

    for(let node = dummy; node != null; node = node.next) {
        prefix += node.val
        seen[prefix] = node
    }
    prefix = 0
    for(let node = dummy; node != null; node = node.next) {
        prefix += node.val
        node.next = seen[prefix].next
    }
    return dummy.next
};
```