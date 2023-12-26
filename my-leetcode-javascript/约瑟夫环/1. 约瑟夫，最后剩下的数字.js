// 3 1 5 2 4
// 3 6 4 
console.log('=====================================================================')

function lastRemaining(n, m) {
  let arr = []
  for(let i = 1; i <= n; i++) {
    arr[i - 1] = i
  }
  let curIndex = 0

  while(arr.length > 1) {
    let step = (m - 1) % arr.length

    if(curIndex + step <= arr.length - 1) {
      curIndex = curIndex+step
    } else {
      curIndex = curIndex - (arr.length - step)
    }

    arr.splice(curIndex, 1)

    curIndex = curIndex > arr.length - 1 ? 0 : curIndex
  }
  return arr[0]
}

console.log(lastRemaining(5, 3))
console.log(lastRemaining(6, 3))
console.log(lastRemaining(5, 2))
console.log(lastRemaining(100, 88))


console.log('====================================================================================')

function ReWinner(m, n) {
  let arr = []
  for(let i = 0; i < m; i++) {
    arr[i] = i + 1
  } 

  let count = 0
  let cur = 0
  while(count != m - 1) {
    let curVal = arr.shift()
    if((cur + 1) % n != 0) {
      arr.push(curVal)
    } else {
      count ++
    }
    cur ++
  }
  return arr[0]
}

console.log(ReWinner(5, 3))
console.log(ReWinner(6, 3))
console.log(ReWinner(5, 2))
console.log(ReWinner(100, 88))

// 1 2 3 4 5
// 2  [1,3,4,5]
// 4 [1,3,5]
// 1 [3,5]
// 5 [3]

console.log('====================================================================================')

function josephusSurvivor(n, q) {
  let people = []; // 创建一个数组来表示初始的n个人

  for (let i = 0; i < n; i++) {
    people.push(i + 1);
  }

  let index = 0;
  while (people.length > 1) {
    index = (index + q - 1) % people.length; // 计算被淘汰的人的索引
    people.splice(index, 1); // 从数组中移除被淘汰的人
  }

  return people[0]; // 返回最后存活的人的位置
}

// 测试

console.log(josephusSurvivor(5, 3))
console.log(josephusSurvivor(6, 3))
console.log(josephusSurvivor(5, 2))
console.log(josephusSurvivor(100, 88))