// 双重循环
function unique1(str) {
  let res = []
  for(let i = 0, len = str.length; i < len; i++) {
    for(var j = 0; j < res.length; j++) {
      if(res[j] === str[i]) {
        break
      }
    }
    if(j === res.length) {
      res.push(str[i])
    }
  }

  return res
}
console.log("unique1:", unique1(['1', 1, 2, 1, 2, 3, 4]))
// indexOf
function unique2(str) {
  let res = []
  for(let i = 0; i < str.length; i++) {
    if(res.indexOf(str[i]) === -1) {
      res.push(str[i])
    }
  }
  
  return res
}
console.log("unique2:", unique2(['1', 1, 2, 1, 2, 3, 4]))
// 排序去重
function unique3(str) {
  let res = []
  str.sort((a, b) => a-b)
  for(let i = 0; i < str.length; i++) {
    if(!i || str[i] !== str[i-1]) {
      res.push(str[i])
    }
  }

  return res
}
console.log("unique3:", unique3(['1', 1, 2, 1, 2, 3, 4]))
// filter
function unique4(str) {
  return str.filter((item, index) => {
    return str.indexOf(item) === index
  })
}
console.log("unique4:", unique4(['1', 1, 2, 1, 2, 3, 4]))

// filter + 排序
function unique5(str) {
  return str.sort().filter((item, index, str) => {
    return !index || item !== str[index - 1]
  })
}
console.log("unique5:", unique5(['1', 1, 2, 1, 2, 3, 4]))
// Object键值对
function unique6(str) {
  let obj = {}
  return str.filter((item, index, str) => {
    return obj.hasOwnProperty(JSON.stringify(item)) ? false : (obj[JSON.stringify(item)] = true)
  })
}
console.log("unique6:", unique6(['1', 1, 2, 1, 2, 3, 4]))
// set
function unique7(str) {
  return [...new Set(str)]
}
console.log("unique7:", unique7(['1', 1, 2, 1, 2, 3, 4]))

// map
function unique8(str) {
  let map = new Map()
  return str.filter((item, index, str) => !map.has(item) && map.set(item, true))
}
console.log("unique8:", unique8(['1', 1, 2, 1, 2, 3, 4]))
