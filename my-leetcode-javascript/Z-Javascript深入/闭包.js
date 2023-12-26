/**
 * https://github.com/mqyqingfeng/Blog/issues/9
 * 理论上的闭包： 函数+函数可以访问自由变量
 * 实践上的闭包： 1.即使创建它的执行上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回），2.在它的代码中引入了自由变量
 */


var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope();
foo()


/**
 * 上述代码的执行过程：
 * 1.进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
 * 2.全局执行上下文初始化
 * 3.执行checkscope函数，创建checkscope执行上下文，压入执行上下文栈中
 * 4.checkscope执行上下文初始化， 创建变量对象，作用域链，this等
 * 5.checkscope执行完毕，出栈
 * 6.执行f函数，创建f执行上下文，压入执行上下文栈
 * 7.f执行上下文初始化，创建变量对象，作用域链，this等
 * 8.f函数执行完毕，出栈
 * 9.全局执行上下文出栈
 * 10.执行完毕
 * 
 * 
 * 由此可见，执行 f 函数时， checkscope函数执行上下文已经销毁。
 * 能访问到checkscope函数的原因是： f执行上下文中维护了一个作用域链：
 * fContext = {
        Scope: [AO, checkscopeContext.AO, globalContext.VO],
    }
 * f 函数依然可以读取到checkscopedContext.AO ,所以即使checkscoped执行上下文被销毁了，也能够读取到其中的scope
 */




/*************************************************举例**************************************** */
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();    // 3
data[1]();    // 3
data[2]();    // 3
// data[i].content中没有存储i的值，所以会去外层找global中的i，而此时global中的i 为3

var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}

data[0]();  // 0
data[1]();  // 1
data[2]();  // 2
// data[i].content 中存储了匿名函数中的i，所以能读取到