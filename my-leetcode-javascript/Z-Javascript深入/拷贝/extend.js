// jQuery中extend用法
// jQuery.extend(target, [,object1], [,object2],....,[,objectN])

var obj1 = {
  a: 1,
  b: { b1: 1, b2: 2}
}

var obj2 = {
  b: { b1: 3, b3: 4},
  c: 3
}

var obj3 = {
  d: 4
}

// 使用extend的最终结果为：
// {
//    a: 1,
//    b: { b1: 3, b3: 4 },
//    c: 3,
//    d: 4
// }

function shallowExtend() {
  let len = arguments.length

  let i = 1;
  let target = arguments[0]
  for(; i < len; i++) {
    let options = arguments[i]

    if(options != null) {
      for(let name in options) {
        let option = options[name]

        if(option != undefined) {
          target[name] = option
        }
      }
    }
  }
  return target
}
const shallowObj = shallowExtend(obj1, obj2, obj3)
shallowObj.a = 100
console.log("shallowObj.a", shallowObj.a)
console.log("obj1.a", obj1.a)

function deepExtend() {
  let len = arguments.length

  let i = 1
  let deep = false, copyIsArray
  let target = arguments[0] || {}
  if(typeof target === 'boolean') {
    deep = target
    target = arguments[i] || {}
    i++
  }
  if(typeof target !== 'object') {
    target = {}
  }

  for(; i < len; i++) {
    let options = arguments[i]

    if(options != null) {
      for(let name in options) {
        let src = target[name]
        let option = options[name]

        if(option != undefined) {
          if(deep && option && (typeof option === 'object')) {
            let clone
            if( Array.isArray(option)) {
              clone = Array.isArray(src) ? src : []
            } else {
              clone = typeof src === 'object' ? src : {}
            }
            target[name] = deepExtend(true, clone, option)
          }else {
            target[name] = option
          }
        }
      }
    }
  }

  return target
}



const deepObj = deepExtend(true, obj1, obj2, obj3)

deepObj.c = 100
console.log("deepObj.c", deepObj.c)
console.log("obj2.c", obj2.c)


const deepObjDemo = deepExtend(true, {
  a: 1,
  b: {
    c: 2
  }
}, {
  b: {
    c: [5]
  }
})

console.log("=======:", deepObjDemo)


const deepArrayDemo = deepExtend(true, [1,2,3,7,8,9,0],[1,2,3,4,5])
console.log("deepArrayDemo", deepArrayDemo)


const deepObjArrayDemo = deepExtend(true, {
  value: {
    3: 1
  }
}, {
  value: [5,6,7]
})
console.log("deepArrayDemo", deepObjArrayDemo)