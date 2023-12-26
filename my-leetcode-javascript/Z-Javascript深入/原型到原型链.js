function Person() {}

const p = new Person()

console.log(p.__proto__ === Person.prototype)


p.name = 'p.name'
Person.prototype.name = 'Person.prototype.name'

delete p.name
// p.name找不到，找原型上的
console.log(p.name)



console.log(Person.prototype.__proto__ === Object.prototype)


// constructor

console.log(Person.prototype.constructor === Person)

// p上没有constructor, 但使用p.constructor时会去 Person.prototype 上去寻找

console.log(p.constructor === Person)


// 特殊： Function === Function.prototype

console.log(Function.__proto__ === Function.prototype)