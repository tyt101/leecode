function debounce1(func, wait) {
  let timeout = null
  return function() {
    let args = arguments
    let context = this
    if(timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait);
  }
}


function throttle1(func, wait) {
  let previous = 0
  let context, args
  return function() {
    context = this
    args = arguments
    let now = +new Date()
    if(now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}

// 第一次触发的时候立即执行
function debounce2(func, wait, immediate) {
  let timeout = null
  let callNow = false
  return function() {
    let args = arguments
    let context = this
    if(timeout) clearTimeout(timeout)
    if(immediate && !callNow) {
      func.apply(context, args)
      callNow = true
    }else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}