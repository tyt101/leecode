// 1. 循环遍历, 调用cb
// 2. this指向当前遍历的对象




/**
 * @desc 类数组
 * @param {*} arr
 * @requires 具有length属性，具有索引 
 */
function isArrayLike(arr) {
  return Array.isArray(arr) || (typeof arr === 'object' && 'length' in arr && arr !== null)
}

function each(arr, cb) {
  let len , i = 0
  if(isArrayLike(arr)) {
    len = arr.length
    for(; i < len; i++) {
      if(cb.call(arr[i], i, arr[i]) === false) {
        break;
      }
    }
  } else {
    for(i in arr) {
      if(cb.call(arr[i], i, arr[i]) === false) {
        break;
      }
    }
  }

  return arr
}

let arr = [1,2,3,4,6]
console.log(each(arr, function(key, item) {
  return item + 1
}))