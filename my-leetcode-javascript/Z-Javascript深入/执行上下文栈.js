/**
 * 补充知识：作用域和执行上下文
 * 区别：执行上下文是运行的时候确定的，而Javscript的作用域是在定义的时候确定的，并且不会改变，一个作用域可能包含若干个上下文环境。
 * 作用域：全局作用域，局部作用域（函数作用域）
 * 执行上下文： 是一个执行栈，里面始终有一个全局代码在栈底，当遇到函数调用，就将其压入栈，执行完毕就出栈
 */

/**
 * 当JavaScript代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。
 * 变量对象(Variable object，VO)
 * 作用域链(Scope chain)
 * this
 */




/**
 * 可执行代码： 全局代码，函数代码，eval代码
 */

/**
 * 执行上下文 ---》 执行栈
 */

ECStack = [
  globalContext   // 全局代码
]

function fun3() {
  console.log('fun3')
}

function fun2() {
  fun3();
}

function fun1() {
  fun2();
}

fun1();

// 执行栈的变化
ECStack.push(<fun1> functionContext);

// fun1中竟然调用了fun2，还要创建fun2的执行上下文
ECStack.push(<fun2> functionContext);

// 擦，fun2还调用了fun3！
ECStack.push(<fun3> functionContext);

// fun3执行完毕
ECStack.pop();

// fun2执行完毕
ECStack.pop();

// fun1执行完毕
ECStack.pop();

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext



{/* 以下两种结果一样都打印local scope， 但执行上下文不同 */}

{/* 举例：
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
*/}

{/* 
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();
*/}



{/* 举例：
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
*/}

{/* 
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();
*/}