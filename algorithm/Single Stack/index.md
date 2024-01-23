### Summerize 总结
```javascript
// 维护一个stack栈结构，它是单调递增/单调递减的。
```

### Example 示例
```javascript
// leetCode: 1019. 链表中的下一个更大节点
var nextLargerNodes = function(head) {
    const increaseStack = []      // 单调递增栈结构
    let res = []
    let cur = head
    let idx = -1
    while(cur) {
        let val = cur.val
        res.push(0)
        idx ++
        while(increaseStack.length && increaseStack[increaseStack.length - 1][0] < val) {
            res[increaseStack.pop()[1]] = cur.val
        }
        increaseStack.push([cur.val,idx])
        cur = cur.next
    }
    return res
};
```