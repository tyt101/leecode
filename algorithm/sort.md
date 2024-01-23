### algorithm time image
![Alt text](array_and_chain_operate_time.png)
- 计算机内存犹如一大堆抽屉；
- 需要存储多个元素时，可使用数组或链表；
- 数组的元素都在一起；
- 链表的元素是分开的，其中每个元素都存储了下一个元素的地址；
- 数组的读取速度很快；
- 链表的插入和删除速度很快；
- 在同一个数组中，所有元素的类型都必须相同（都为 int、double 等）。

### Example
#### which sort way is used by sort function? sort方法采用的什么排序？
```
1. 默认线将元素转换为字符串，然后再进行排序
2. 排序算法：
    2.1 当n <= 10; 采用插入排序
    2.2 当n > 10; 采用三路快速排序
    2.3 当10 < n <= 1000; 采用中位数作为哨兵元素
    2.4 当n > 1000; 每隔200-215个元素挑出一个元素，放到一个新数组，然后对它排序，找到中间位置的数，以此作为中位数。
```
#### Why does Google prioritize Quick Sort over Merge Sort? 为什么Google优先使用快速排序而不是归并排序
```
1. 归并不是原地排序算法，空间复杂度为O(n)
2. 归并排序和快速排序都是O(nlogn), 但归并排序的基数大。
注：一般的简单查找和二分查找，常量基数无关紧要，因为列表很长时，O(logn)的速度远快于O(n)。
注：快速排序，最好随机选择用作基准值的元素。平均时间在O(nlogn)
```

#### array sort 数组的冒泡排序
```javascript
function bubbleSort(arr) {
  let len = arr.length
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len - 1 - i; j++) {
      if(arr[j+1] < arr[j]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
```

#### array sort 数组的选择排序
```javascript
function selectSort(arr) {
  let len = arr.length
  for(let i = 0; i < len - 1; i++) {
    let minIndex = i
    for(let j = i + 1; j < len; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if(minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}
```

#### array sort 数组的插入排序
```javascript
function insertSort(arr) {
  let len = arr.length
  for(let i = 1; i < len; i++) {
    let j = i
    let target = arr[j]
    while(arr[j-1] > target && j >=0) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = target
  }
  return arr
}
```

#### array sort 数组的归并排序
```javascript
function mergeSort(arr) {
  if(arr.length < 2) return arr
  let index = Math.floor(arr.length / 2)

  return merge(mergeSort(arr.slice(0, index)), mergeSort(arr.slice(index)))
}


function merge(left, right) {
  let res = []
  let i = 0;
  let j = 0;
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      res.push(left[i])
      i++
    } else {
      res.push(right[j])
      j++
    }
  }

  if(i < left.length) {
    res = res.concat(...left.slice(i))
  }
  if(j < right.length) {
    res = res.concat(...right.slice(j))
  }

  return res
}
```

#### array sort 数组的快速排序
```javascript
// 1
function quickSort(array) {
    // ----> base case 基线条件
    if(array.length < 2) return array       

    // ----> recursive case 递归条件
    let pivot = array[0]

    let left = array.slice(1).filter(item => item <= pivot)
    let right = array.slice(1).filter(item => item > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}

// 2
function quickSort(arr, left=0, right=arr.length - 1) {
  if(arr.length < 2) return arr
  let passIndex = partion(arr, left, right)
  if(left < passIndex - 1) {
    quickSort(arr, left, passIndex - 1)
  }
  if(passIndex < right) {
    quickSort(arr, passIndex, right)
  }
  return arr
}

function partion(arr, left, right) {
  let pivot = arr[Math.floor(left + (right - left) / 2)]
  let p = left
  let q = right
  while(p <= q) {
    while(arr[p] < pivot) {
      p++
    }

    while(arr[q] > pivot) {
      q--
    }

    if(p <= q) {
      swap(arr, p, q)
      p++
      q--
    }
  }
  return p
}

function swap(arr, p, q) {
  [arr[p], arr[q]] =[arr[q], arr[p]]
}
```

#### chain sort 链表的归并排序
```javascript
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


 var mergeSort = function(head1, head2) {
    const dummyHead = new ListNode(0);
    let temp = dummyHead, temp1 = head1, temp2 = head2;
    while(temp1 != null && temp2 != null) {
        if(temp1.val <= temp2.val) {
            temp.next = temp1
            temp1 = temp1.next
        } else {
            temp.next = temp2
            temp2 = temp2.next
        }
        temp = temp.next
    }

    if(temp1 != null) {
        temp.next = temp1
    }else if(temp2 != null) {
        temp.next = temp2
    }

    return dummyHead.next
}
const toSortList = function(head, tail) {
    if (head === null){
        return head;
    }

    if(head.next === tail) {
        head.next = null
        return head;
    }
    let slow = head, fast = head;
    while(fast !== tail) {
        slow = slow.next
        fast = fast.next
        if(fast !== tail) {
            fast = fast.next
        }
    }
    const mid = slow
    return mergeSort(toSortList(head, mid), toSortList(mid, tail))
}

var sortList = function(head) {
    return toSortList(head, null)
};

```

#### chain sort 链表的插入排序
```javascript
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
```

