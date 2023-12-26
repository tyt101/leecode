// 柯里化： 是将一个多参数转换成多个单参数函数，也就是将一个n元函数转换成n个一元函数
// curry
// 局部应用： 是固定一个函数的一个或者多个参数，也就是将一个n元函数转换成一个n - x元函数
// partial

// 第一版
// 似曾相识的代码
function partial(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
      var newArgs = args.concat([].slice.call(arguments));
      return fn.apply(this, newArgs);
  };
};

function add(a, b) {
  return a + b + this.value;
}

// var addOne = add.bind(null, 1);
var addOne = partial(add, 1);

var value = 1;
var obj = {
  value: 2,
  addOne: addOne
}
console.log(obj.addOne(2))
obj.addOne(2); // ???
// 使用 bind 时，结果为 4
// 使用 partial 时，结果为 5



// 第二版本
var _ = {};

function partialTwo(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var position = 0, len = args.length;
        for(var i = 0; i < len; i++) {
            args[i] = args[i] === _ ? arguments[position++] : args[i]
        }
        while(position < arguments.length) args.push(arguments[position++]);
        return fn.apply(this, args);
    };
};

var subtract = function(a, b) { return b - a; };
subFrom20 = partialTwo(subtract, _, 20);
subFrom20(5);