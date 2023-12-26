/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 下一个更大元素_ I
var nextGreaterElement = function(nums1, nums2) {
    // let res = []
    // for(let i = 0; i < nums1.length; i++) {
    //     let curI = nums1[i]
    //     let index = nums2.indexOf(curI)
    //     for(var j = index +1; j < nums2.length; j++) {
    //         if(nums2[j] > curI) {
    //             res.push(nums2[j])
    //             break;
    //         }
    //     }
    //     if(j >= nums2.length) {
    //         res.push(-1)
    //     }
    // }  
    // return res

    let stack = []
    let obj = {}
    let res = []
    for(let m of nums2) {
        while(stack.length && m > stack[stack.length - 1]) {
            let k = stack.pop()
            obj[k] = m
        }
        stack.push(m)
    }

    for(let m of stack) {
        obj[m] = -1
    }

    for(let m of nums1) {
        res.push(obj[m])
    }
    return res
};

// 下一个更大元素_ II

var nextGreaterElements = function(nums) {
  let len = nums.length
  let res = []
  for(let i = 0; i < len; i++) {
    cur = i + 1
    let flag = false
    if(cur == len) cur = 0
    while(i != cur) {
        if(nums[cur] > nums[i]){
            flag = true
            res.push(nums[cur])
            break;
        } else{
            cur ++
        }

        if(cur == len) {
            cur = 0
        }
    }
    if(!flag) {
        res.push(-1)
    }
  }
  return res
};




