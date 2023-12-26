/**
 * 柯里化函数：第一个参数为函数名，后面的为参数列表
 */



// 一次转换，将一个二元函数，转换成了两个一元函数
// function curry(fn) {
//   let args = [].slice.call(arguments, 1)
//   return function() {
//     let newArgs =args.concat([].slice.call(arguments))
//     console.log("=====", newArgs, arguments)
//     return fn.apply(this, newArgs)
//   }
// }

// function add(a,b) {
//   return a + b
// }

// const addCurry = curry(add,1)
// console.log("=====:", addCurry(2))



// 第二版
function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
      return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

function curry(fn, length) {

  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function() {
      if (arguments.length < length) {
          var combined = [fn].concat(slice.call(arguments));
          // 当所得参数小于剩余参数数量时，收集到参数继续递归
          return curry(sub_curry.apply(this, combined), length - arguments.length);
      } else {
          // 当参数齐了（和fn中参数一致）， 调用fn。这样就将一个多参数函数转换成了多个单参数函数
          return fn.apply(this, arguments);
      }
  };
}