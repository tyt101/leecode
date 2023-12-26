// https://github.com/mqyqingfeng/Blog/issues/7


/** ************************************示例1************************************************ */
var value = 1;
var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//示例1
console.log(foo.bar());       // 2
//示例2 
console.log((foo.bar)());     // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4
console.log((false || foo.bar)());  // 1
//示例5
console.log((foo.bar, foo.bar)());  // 1

/** *********************************************示例2*************************************** */
var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

console.log((false || foo.bar)()); // 1


/************************************************示例3 ************************************* */
function Foo(){
	getName = function(){
    // 这里的this指向windows
      console.log(1);					
    };
	return this
}
			
function getName(){
	console.log(5);
}

Foo().getName()     // 打印出来1，因为Foo里面的getName在执行的时候覆盖了下面的函数getName



/** ********************************************示例4 ************************************** */
function Foo(){
  getName = function(){
    console.log(1);		
  };
  return this;
}

Foo.prototype.getName = function(){
  console.log(3);
};

function getName(){
  console.log(5);
};
new Foo().getName()//3 ，
//此题主要考察的是运算符优先级问题。 成员访问 和 new（带参数列表）的优先级都是19，相同等级下，遇到谁就先执行谁，
//所以new Foo().getName相当于（new Foo()）.getName()
//new返回一个对象，这个对象的原型指向Foo.prototype,所以就访问这个对象上的getName的方法。
