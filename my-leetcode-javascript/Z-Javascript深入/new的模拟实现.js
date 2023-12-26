// new操作符干了什么 

function Otaku(name, age) {
  this.name = name
  this.age = age
}

Otaku.prototype.strength = 100

Otaku.prototype.getStrength = function() {
  console.log("Get Your Strength: ",this.strength)
}



const newOtaku = new Otaku('tyt','18')
console.log(newOtaku.name)
console.log(newOtaku.age)
console.log(newOtaku.strength)
newOtaku.getStrength()


// 由上可知： new 返回的是一个新对象， 能访问Otaku构造函数中的属性，能访问其原型上的属性和方法

function myNew() {
  const obj = new Object()

  const Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype

  const res = Constructor.apply(obj, arguments)
  if(typeof res === 'object') return res
  return obj
}
