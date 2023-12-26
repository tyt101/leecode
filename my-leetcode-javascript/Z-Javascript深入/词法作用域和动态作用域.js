/**
 * Javascript采用的词法作用域（lexical scoping） 静态作用域 作用域在定义的位置
 * bash采用的动态作用域，作用域在执行的位置
 */

var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// Javascript中结果是 1 
// bash中结果是2



// 《Javscript权威指南》中：

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();


var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();

// 以上两个都打印 local scope , 因为Javascript是词法作用域，函数的作用域基于函数创建的位置， 所以都打印local scope