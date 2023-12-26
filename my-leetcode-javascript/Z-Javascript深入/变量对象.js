/**
 * 问题解答：
 * VO和AO：变量对象（VO）中的属性都不能访问！但是进入执行阶段之后，变量对象（VO）转变为了活动对象（AO），里面的属性都能被访问了。
 *        VO和AO实际上都是同一个对象，只是处于执行上下文的不同生命周期
 * 变量对象：
 *        变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。
 *        因为不同执行上下文下的变量对象稍有不同，所以我们来聊聊全局上下文下的变量对象和函数上下文下的变量对象。
 */



/**
 * 举例
 */

function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);

/**
AO = {
  arguments: {
      0: 1,
      length: 1
  },
  a: 1,
  b: undefined,
  c: reference to function c(){},
  d: undefined
}
 */