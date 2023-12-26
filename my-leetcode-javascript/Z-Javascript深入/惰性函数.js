// 可以解决每次都需要判断的问题


// 例子：写一个函数函数返回首次调用时的 Date 对象

function ajust() {
  let t = new Date()

  ajust = function() {
    return t
  }

  return ajust()
}

console.log(ajust())

// 例子：兼容现代浏览器和IE浏览器
function addEvent(type, el, fn) {
  if(window.addEventListener) {
    addEvent = function(type, el, fn) {
      el.addEventListener(type, fn, false)
    }
  } else if(window.attachEvent) {
    addEvent = function(type, el, fn) {
      el.attachEvent('on', type, fn)
    }
  }
}