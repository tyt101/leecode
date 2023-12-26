/**
 * 类数组：
 * Arguments   ,   DOM方法(document.getElementsByTag)
 */


/**
 * 类数组 转  数组
 */


// Array.prototype.slice.call(arrayLike)
// Array.prototype.map.call(arrayLike, function(item) { return item })
// Array.from()
// Array.prototype.concat.apply([], arrayLike)
// ...arguments

/**
 * callee属性
 * Arguments对象的callee属性， 通过它可以调用函数自身
 */

// var data = [];

// for (var i = 0; i < 3; i++) {
//     (data[i] = function () {
//        console.log(arguments.callee.i) 
//     }).i = i;
// }

// data[0]();
// data[1]();
// data[2]();

// 0
// 1
// 2



function fn() {
  console.log(1)
}

fn()
