let arr = [1,2,[3,4],[5,6,[7,8,9]]]

// 递归

function flatten1(arr) {
  let res = []
  for(let cur of arr) {
    if(Array.isArray(cur)) {
      res = res.concat(flatten1(cur))
    } else {
      res.push(cur)
    }
  }
  return res
}


console.log(flatten1(arr))
// reduce

function flatten2(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten2(next) : next)
  }, [])
}

console.log(flatten2(arr))
// some

function flatten3(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flatten3(arr))

// toString

function flatten4(arr) {
  return arr.toString().split(",").map(item => Number(item))
}
console.log(flatten4(arr))
