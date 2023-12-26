let arr = [1,40,2,5,2]
// 原始方法
function getMax1() {
  let Max = Math.max()
  for(let a of arr) {
    Max = Math.max(a, Max)
  }
  return Max
}
console.log(getMax1())
// reduce
function getMax2() {
  return arr.reduce((cur, next) => Math.max(cur, next))
}
console.log(getMax2())
// ES6 ...
function getMax3() {
  return Math.max(...arr)
}
console.log(getMax3())
// eval
function getMax4() {
  return eval("Math.max("+arr+")")
}
console.log(getMax4())
// apply
function getMax5() {
  return Math.max.apply(null, arr)
}
console.log(getMax5())
// 排序
function getMax6() {
  return arr.sort((a,b)=>a-b)[arr.length - 1]
}
console.log(getMax6())